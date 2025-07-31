import { Feature } from "./features/feature";
import { Plataforma } from "./Plataforma";

export interface JogoEmDesenvolvimento {
    nome: string;
    genero: string;
    plataformas: Plataforma[];
    preco: number;
    engine: string;
    publicoAlvo: string;
    topico: string;
    features: string[];
    PDs: number; // Pontos de Desenvolvimento necessários para concluir o jogo
    PDsProduzidos: number; // Pontos de Desenvolvimento já produzidos
    qualidade: number; // Qualidade do jogo, calculada com base na combinação de features
    bugs: number;
}