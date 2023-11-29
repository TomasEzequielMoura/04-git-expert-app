import React, { useState } from 'react'
import { GifGrid, AddCategory, GifItem} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // vamos a evitar el push para agregar un elemento a un array en React
        // categories.push('Valorant')
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    console.log(categories)

    return (
        <>
            {/* // Titulo */}
            <h1>GifExpertApp</h1>
            {/* // Input*/}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {/* // Listado de Gig  */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {
                categories.map((category) => (
                    // <li key={category}>{category}</li>
                    <GifGrid key={category} category={category} />
                ))
            }

            {/* Gif Item */}

        </>


    )
}