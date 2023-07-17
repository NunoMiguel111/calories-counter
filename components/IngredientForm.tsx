import Image from "next/image"

export default function IngredientForm() {
    return (
        <div className="ingredient-form-container bg-form-color w-[651px] h-[621px] p-10">
            <div className="ingredient-pop-container flex flex-col items-center">
                <form className="flex flex-col gap-5">
                    <div className="ingredient-form-field">
                        <label htmlFor="ingredient">Ingredient</label>
                        <input type="text" className="ml-2" />
                    </div>
                    <div className="ingredient-form-field">
                        <label htmlFor="quantity">Qtd</label>
                        <input type="text" className="ml-2"/>
                        <select id="dropdown" className="bg-white">
                            <option value="Option1">pieces</option>
                            <option value="Option2">g</option>
                            <option value="Option3">kg</option>
                            <option value="Option4">oz</option>
                            <option value="Option5">lb</option>
                            <option value="Option6">cups</option>
                            <option value="Option7">tsp</option>
                            <option value="Option8">tbsp</option>
                            <option value="Option9">liters</option>
                            <option value="Option10">mililiters</option>
                        </select>
                    </div>
                    <button className="w-50 bg-linear-grad">
                        <Image src="/images/Time_fill.svg" alt="clock" width="50" height="50"/>
                        AI Autocomplete
                    </button>
                    <div className="ingredient-form-field">
                        <label htmlFor="ingredient">Calories</label>
                        <input type="text" />
                    </div>
                    <div className="ingredient-form-field">
                        <label htmlFor="ingredient">Protein</label>
                        <input type="text" />
                    </div>
                    <div className="ingredient-form-field">
                        <label htmlFor="ingredient">Carbs</label>
                        <input type="text" />
                    </div>
                    <div className="ingredient-form-field">
                        <label htmlFor="ingredient">Fats</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}