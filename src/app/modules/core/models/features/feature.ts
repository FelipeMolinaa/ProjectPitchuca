import { FeatureMultiplicador } from "./featureMultiplicador";
import { FeaturesQualidade } from "./featuresQualidade";

export interface Feature {
    id: string;
    name: string;
    PDs: number;              // PDs “puros” sem sinergias
    qualidade: number;          // qualidade que a feature adiciona ao jogo
    // cada sub-array é um grupo de pré-requisitos que devem TODOS estar ativos (AND)
    // e o array externo diz que basta UM desses grupos ser satisfeito (OR)
    // FeaturesPrerequisitos: [
    //     ['X', 'Y'],  // grupo 1: X AND Y
    //     ['Z']        // grupo 2: Z
    // ],
    featuresPrerequisitos?: string[][];
    featuresMultiplicadores?: FeatureMultiplicador[];     // quando combinada com outra, multiplica custo
    featuresQualidade?: FeaturesQualidade[]; // features combinadas que geram penalidades ou bônus de qualidade
    especialistas?: string[]; // especializações que podem utilizar essa feature
}