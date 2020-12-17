import styled, { css } from 'styled-components'

export const Main = styled.main`
	margin: 0;
	height: 100vh;
	display: grid;
	grid-template-columns: 6fr 300px;
	grid-template-rows: 60px 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	background: linear-gradient(210.65deg, #FFEE99 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, #EA4A46 -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
	opacity: 0.3;
	padding: 20px 39px 15px;
`;

export const InfoBar = styled.div`
	grid-column: 1/span 2;
	grid-row: 1/span 1;
	justify-self: stretch;
	background-color: red;
`;

export const Sub6ColGrid = styled.div`
	grid-column: 1/ span 1;
	grid-row: 2/ span 1;
	display: grid;
	background-color: turquoise;
`;

export const SideBarParent = styled.div`
	height: 90vh;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 1fr 100px;
`;

export const SideBar = styled.div`
	grid-row: 1/span 1;
	background-color: yellow;
	height: calc(100vh - 159px);
`;

// Buttons
export const WideBtn = styled.button`
	width: 280px;
	max-height: 50px;
	padding: 15px 0;
	margin: 17px 8px;
	border-radius: 15px;
`;

// Progress Bar
export const ProgressBarCont = styled.div`
	grid-column: span 2;
	color: var(--tux-black);
`;

export const ProgressBar = styled.progress`
	background-color: rebeccapurple;
`;


// Color Blocks
export const ColorBlock = styled.div`
  grid-column: span 1;
  height: 5px;
  
  ${props => props.tuxBlue && css`
    grid-row: 1/span 1;
    grid-column: 1/span 1;
    background-color: var(--tux-blue);
  `}
  
  ${props => props.tuxYellow && css`
  	grid-row: 1/span 1;
    grid-column: 2/span 1;
    background-color: var(--tux-yellow);
	`}
	
	${props => props.tuxWhite && css`
    grid-row: 1/span 1;
    grid-column: 3/span 1;
    background-color: var(--tux-white);
	`}
	
	${props => props.tuxGrey && css`
    grid-row: 1/span 1;
    grid-column: 4/span 1;
    background-color: var(--tux-grey);
	`}
	
	${props => props.tuxBlack && css`
    grid-row: 1/span 1;
    grid-column: 5/span 1;
    background-color: var(--tux-black);
	`}
	
	${props => props.tuxRed && css`
    grid-row: 1/span 1;
    grid-column: 6/span 1;
  	background-color: var(--tux-red);
  `}
`;