import { useState } from "react";

function Form() {

    const [errorMessage, setErrorMessage] = useState("");

    const submitForm = () => {
        const forms = document.querySelectorAll(".input-form");
        const message = document.querySelector(".error-text");

        const emptyForm = Array.from(forms).some(input => input.value.trim() === "");


            if (emptyForm) {
                message.style.color = ("#F30000");
                setErrorMessage("Preencha todos os campos!");
                return;
            } else {
                message.style.color = ("#00000000");
            }



    }

    return (
        <section className="grid py-4 w-screen xl:w-[45%] text-black bg-white place-items-center">
            <div className="text-center py-4">
                <h1 className="text-3xl lg:text-4xl">FAÇA PARTE TAMBÉM</h1>
                <p className="lg:text-lg">e tenha acesso a todo nosso repertorio</p>
            </div>
            <div className="grid w-[80%] xl:w-[60%] gap-2 p-6 xl:p-12 rounded-2xl place-items-center shadow-2xl">
                <div>
                    <p>* Seu nome</p>
                    <input className="input-form" />
                </div>
                <div>
                    <p>* Email</p>
                    <input className="input-form" />
                </div>
                <div>
                    <p>* Seu telefone</p>
                    <input className="input-form" />
                </div>
                <div>
                    <p>* Área de estudo</p>
                    <input type="text" className="input-form" />
                </div>

                <p className="h-4 text-transparent select-none error-text transition-all duration-500">
                    {errorMessage}
                </p>

                <button className="my-2 w-42 h-12 cursor-pointer text-white bg-green-600 hover:bg-green-700 transition-all rounded-2xl"
                    onClick={submitForm}>
                    Entrar no ReadIt
                </button>

            </div>
        </section>
    )
}

export default Form;