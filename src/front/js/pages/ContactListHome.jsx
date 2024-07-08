import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../component/Spinner.jsx';

export const ContactListHome = () => {
    const { store, actions } = useContext(Context)
    const [visibleSpinnerLeft, setVisibleSpinnerLeft] = useState(false)
    const [visibleSpinnerRight, setVisibleSpinnerRight] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [agendaList, setAgendaList] = useState([])
    const [lastFetch, setLastFetch] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [dropdownValue, setdropdownValue] = useState(store.agendaName && store.agendaName)

    const navigate = useNavigate();

    const handleSelectAgenda = (event) => {
        event.preventDefault();
        if (dropdownValue) {
            setVisibleSpinnerLeft(true)
            actions.setAgendaName(dropdownValue)
            navigate('/contact-list/' + dropdownValue)
        }
    }

    const handleCreateAgenda = (event) => {
        event.preventDefault();
        if (inputValue) {
            setVisibleSpinnerRight(true)
            actions.createAgenda(inputValue)
            actions.setAgendaName(inputValue)
            navigate('/contact-list/' + inputValue)
        }
    }

    const fetchData = async () => {
        const now = Date.now();
        if (now - lastFetch >= 5000) { // 5000ms = 5 segundos
            setLastFetch(now);
            setIsButtonDisabled(true);
            await actions.getAgendas().then((agendas) => {
                setAgendaList(agendas);
            });
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 5000);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='container mt-auto mb-auto d-flex justify-content-evenly align-items-center'>
            <div className='col-auto'>
                <div className="d-flex justify-content-center align-items-center mb-5">
                    <h1>Select an agenda</h1>
                </div>
                <div className='d-flex justify-content-center align-items-center mb-4'>
                    <div className="btn-group">
                        <div className="btn dropdown dropdown-center">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                {dropdownValue ? dropdownValue : "Select Agenda"}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-scrollable overflow-auto" style={{ maxHeight: 200 }}>
                                {agendaList == null || !agendaList.agendas || agendaList.agendas.length === 0 ? "Agendas not found" :
                                    agendaList.agendas.map((agenda, index) => {
                                        return (
                                            <li key={index} className="dropdown-item" onClick={() => setdropdownValue(agenda.slug)}>{agenda.slug}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className='btn ms-0' disabled={isButtonDisabled} onClick={() => fetchData()}>
                            <i className="fas fa-sync" />
                        </button>
                    </div>

                </div>
                {visibleSpinnerLeft && <div className='d-flex justify-content-center align-items-center mb-4'>
                    <Spinner color="black" />
                </div>}
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={(e) => handleSelectAgenda(e)} className='btn btn-primary py-2'>Use this!</button>
                </div>
            </div>
            <div className="col-auto container-line">
                <div className="line"></div>
            </div>
            <div className='col-auto'>
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <h1>Create Agenda</h1>
                </div>
                <div className='my-4 form-floating'>
                    <input type='text' className='form-control' id='floatingInput' onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Agenda Name' />
                    <label htmlFor='floatingInput'>Agenda Name</label>
                </div>
                {visibleSpinnerRight && <div className='d-flex justify-content-center align-items-center mb-4'>
                    <Spinner color="black" />
                </div>}
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={(e) => handleCreateAgenda(e)} className='btn btn-primary w-80 py-2'>Create Agenda</button>
                </div>
            </div>
        </div>
    )
}