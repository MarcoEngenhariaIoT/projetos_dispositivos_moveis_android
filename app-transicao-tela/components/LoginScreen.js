import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

function LoginScreen({ navigation }) {
    const [senha, setSenha] = useState('');
    const senhaCorreta = "minhasenha123"; // Senha fixa para verificação

    const realizarLogin = () => {
        if(senha.trim() === ''){
            Alert.alert("Erro", "Por favor, digite a senha");
            return;
        }

        if(senha.length < 6){
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres");
            return;
        }

        // Verifica se a senha está correta
        if(senha === senhaCorreta) {
            navigation.navigate('TelaInicial', { senha });
        } else {
            Alert.alert("Erro", "Senha incorreta!");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Senha: </Text>
            <TextInput
                placeholder="Digite sua senha (mín. 6 caracteres)"
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Button title="Login" onPress={realizarLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    }
})

export default LoginScreen;