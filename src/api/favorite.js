import AsyncStorage from "@react-native-async-storage/async-storage";
import {includes, pull} from 'lodash'
import {FAVORITE_STORAGE} from '../utils/constanst'

export async function getPokemonsFavoriteApi(){
    try {
        const response= await AsyncStorage.getItem(FAVORITE_STORAGE)
        return response
    } catch (error) {
        
    }
}

export async function addPokrmonFavoriteApi(id){
    try {
        const favorites = []
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}
