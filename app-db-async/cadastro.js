import React, {useState} from "react";
import { View, Button, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CadastrarDados = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    const salvarDados = async () => {
        try {
            await AsyncStorage.setItem("nome", nome);
        } catch (e) {
            console.error("Falha ao armazenar dados");
        }
    }

    return (<view>
        <TextInput>
            placeholder="Entre com o nome"
            value={nome}
            onChangeText={setNome}
            style={{ borderWidth: 1, marginBottom: 10}}
        </TextInput>
        
        <Button>
            title="Salvar" onPress={salvarDados}
        </Button> 
    </view>)
}
export default CadastrarDados;