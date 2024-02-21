import { StyleSheet, Text, View, SafeAreaView , Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("") 
  const navigation = useNavigation(); 
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white", alignItems:'center',marginTop:50}}>
      <View>
        <Image
            style={{width:150, height:100}}
            source={{
                uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png"
            }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{
            alignItems:"center"
        }}>
            <Text style={{
                fontSize:17,
                marginTop:12, 
                fontWeight:"bold", 
                color:"#041E42"
                }}>
                Login in to your Account
            </Text>
        </View>
        <View style={{
            marginTop:70
        }}> 
            <View style={{
                alignItems:"center",
                paddingVertical:5,
                borderRadius:5,
                flexDirection:"row",
                gap:5,
                marginTop:30,
                backgroundColor:"#D0D0D0"
            }}>
                <MaterialIcons style={{
                    marginLeft:8,
                    color:"grey"
                }} name="email" size={24} color="black" />
                <TextInput style={{
                    color:"grey",
                    marginVertical:10,
                    width:300,
                    fontSize:18
                }}
                placeholder='Enter your email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
            </View>
        </View>
        {/* View for password */}
        <View style={{
            marginTop:10
        }}> 
            <View style={{
                alignItems:"center",
                paddingVertical:5,
                borderRadius:5,
                flexDirection:"row",
                gap:5,
                marginTop:30,
                backgroundColor:"#D0D0D0"
            }}>
                <AntDesign name="lock1" style={{
                    marginLeft:8,
                    color:"grey"
                }}size={24} color="grey" />
                <TextInput style={{
                    color:"grey",
                    marginVertical:10,
                    width:300,
                    fontSize:16
                }}
                placeholder='Enter your password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                />
            </View>
        </View>
        <View style={{
            marginTop:12,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <Text>Keep me logged in</Text>
            <Text style={{
                color:"#007FFF",
                fontWeight:"500"
            }}>forgot password</Text>
        </View>
        <View style={{
            marginTop:80
        }}/>

        <Pressable  style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}> 
            <Text style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}>Login</Text>
        </Pressable>
        <Pressable
        onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})