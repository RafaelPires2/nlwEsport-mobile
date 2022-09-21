import React from 'react';
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
 id: string;
 hourEnd: string;
 hourStart: string;
 name: string;
 useVouceChannel: boolean;
 weekDays: string[];
 yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
}


export function DouCard({data}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ano(s)`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dia(s)`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={data.name}
      />
    </View>
  );
}

//2 horas e 10min