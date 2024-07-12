import React, { useEffect } from "react";
import sw_star from "../../img/sw_star.png";
import pedro from "../../img/pedro.gif";
import { useNavigate } from "react-router-dom";


export const Pedro = () => {
    useEffect(() => {
        const player = document.createElement("iframe");
        player.src = "https://www.youtube.com/embed/RXKabdUBiWM?autoplay=1&controls=0&showinfo=0&loop=1";
        player.style.position = "absolute";
        player.style.left = "-9999px"; // Posición fuera del área visible
        player.style.width = "1px";
        player.style.height = "1px";
        player.allow = "autoplay";
        player.allowFullscreen = true;

        document.body.appendChild(player);

        // Opcional: Detener el video cuando el componente se desmonte
        return () => {
            player.remove();
        };
    }, []);

	return (
		<div className="container rounded-5 bg-secondary px-5 mb-5 glow" style={{ backgroundImage: `url(${sw_star})`, backgroundSize: 'cover' }} data-bs-theme="dark">
			<img src={pedro} alt="Pedro" className="rounded-circle mx-auto d-block m-4" style={{ width: '150px', height: '100%' }} />
			<div className="d-flex flex-column justify-content-center align-items-center">
			<span>
			<p className="text-primary">Passeggio tutta sola per le strade<br />
				Guardando attentamente i monumenti<br />
				La classica straniera con un'aria strana<br />
				Che gira stanca tutta la città</p>

			<p className="text-primary">A un certo punto della passeggiata<br />
				Mi chiama da una parte un ragazzino<br />
				Sembrava a prima vista tanto perbenino<br />
				Si offre a far da guida per la città</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>

			<p className="text-primary">Altro che ragazzino, che perbenino<br />
				Sapeva molte cose più di me<br />
				Mi ha portato tante volte a veder le stelle<br />
				Ma non ho visto niente di Santa Fè</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>

			<p className="text-warning">Pedro, Pedro, Pedro, Pedro, Pè<br />
				Praticamente il meglio di Santa Fè<br />
				Pedro, Pedro, Pedro, Pedro, Pè<br />
				Fidati di me</p>
			</span>
			</div>
		</div>
	);
};

