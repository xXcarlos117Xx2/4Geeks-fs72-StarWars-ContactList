import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		const fetchData = async () => {
			const types = ["people", "films", "species", "vehicles", "starships", "planets"];
			let apiData = JSON.parse(localStorage.getItem('swApiData')) || {};
		
			// Filtrar tipos de datos incompletos o inexistentes
			const incompleteTypes = types.filter(type => {
				const typeData = apiData[type];
				const totalRecords = typeData ? typeData.total_records : 0;
				const resultsLength = typeData ? typeData.results.length : 0;
		
				return !typeData || resultsLength !== totalRecords;
			});
		
			if (incompleteTypes.length === 0) {
				console.log('Todos los datos ya están almacenados en localStorage.');
				state.actions.fetchFavorite(JSON.parse(localStorage.getItem('favoriteList')));
				return;
			}
		
			// Función para obtener todos los datos paginados de un tipo
			const fetchTypeData = async (type) => {
				let currentPage = 1;
				let results = [];
				let total_records = 0;
				let typeData;
		
				do {
					typeData = await state.actions.APICall(`${state.store.swBaseUrl}${type}?page=${currentPage}&limit=10`);
					if (!typeData || !typeData.results) break;
					results = results.concat(typeData.results);
					total_records = typeData.total_records || total_records;
					currentPage++;
				} while (typeData.next);
		
				return { total_records, results };
			};
		
			for (const type of incompleteTypes) {
				console.log(`Obteniendo datos de: ${type}`);
				apiData[type] = await fetchTypeData(type);
				localStorage.setItem('swApiData', JSON.stringify(apiData));
				console.log(`Datos de ${type} obtenidos y actualizados.`);
			}
		
			state.actions.fetchFavorite(JSON.parse(localStorage.getItem('favoriteList')));
			console.log('Todos los datos han sido obtenidos:', apiData, '\nLista de favoritos cargada:', state.store.favorites);
		};
		
		useEffect(() => {
			fetchData();
		}, []);		

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
