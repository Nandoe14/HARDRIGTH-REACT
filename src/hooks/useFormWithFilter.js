import { useState } from 'react'

export const useFormWithFilter = (initialState = {}) => {
    const [values, setvalues] = useState(initialState)

    const arrayItems = [1, 2, 3, 4, 5, 6]

    const reset = () => {
        setvalues(initialState)
        for (let j = 0; j < arrayItems.length; j++) {
            const itemIndustry = document.getElementsByClassName("selectlist");
            itemIndustry[j + 1].style.display = "grid";
        }
    }

    const handleInputChange = ({ target }) => {

        let contIndustry2 = 0

        for (let j = 0; j < arrayItems.length; j++) {
            const itemIndustry = document.getElementsByClassName("selectlist");
            const itemIndustryText = document.getElementsByClassName("selectlist")[j + 1].innerText.toLowerCase();
            if (itemIndustryText.search(target.value.toLowerCase()) === (-1)) {
                itemIndustry[j + 1].style.display = "none";
            } else {
                itemIndustry[j + 1].style.display = "grid";
                contIndustry2++
            }
        }

        document.querySelector('.select-plegable').style.height = `${(contIndustry2 * 50) + 50}px`

        setvalues({
            ...values,
            [target.name]: target.value,
        })
    }

    return [values, handleInputChange, reset];
}
