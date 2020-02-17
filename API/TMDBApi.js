import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


const API_TOKEN = "ecba0d4dfdee25e536aa08c1c5b6e043";

/**
 * fonction qui requete sur l'API tmdb pour récuperer une liste de film precise et un nombre de page
 * @param text
 * @param page
 * @returns {Promise<any | void>}
 */
export function getFilmsFromApiWithSearchedText(text, page) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text + "&page=" + page;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error)
    )
}

/**
 * fonction qui récupère les images des films
 * @param name
 * @returns {string}
 */
export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}