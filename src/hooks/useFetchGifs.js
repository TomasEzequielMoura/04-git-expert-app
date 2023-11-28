import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // opcion 1
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        // opcion 2
        // getGifs(category).then(
        //     resp => setImages(resp),
        // )
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
