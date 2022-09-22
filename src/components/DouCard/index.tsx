import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { GameController } from 'phosphor-react-native';

import { styles,  } from './styles';

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
  onConnect: () => void;
}


export function DouCard({data, onConnect}: Props) {
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
        value={`${data.weekDays.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVouceChannel ? "Sim" : "Não"}
        colorValue={data.useVouceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={onConnect}
      >
       <GameController 
        color={THEME.COLORS.TEXT}
        size={20}
       />

       <Text style={styles.buttonTitle}>
         Conectar
       </Text>

      </TouchableOpacity>


    </View>
  );
  
}

//2 horas e 10min