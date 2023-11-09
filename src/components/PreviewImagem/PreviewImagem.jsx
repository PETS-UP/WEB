import api from "../../api";
import React, { useState, useEffect } from "react";
import imgUser from "../../assets/icons/ICON-PROFILE.png";

const PreviewImagem = () => {
    const [image, setImage] = useState({
        selectedFile: null
    });
    const [imagemPerfil, setImagemPerfil] = useState("");
    const [preview, setPreview] = useState();

    useEffect(() => {
        api.get(`/clientes/${sessionStorage.ID_CLIENTE}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
            .then((resposta) => {
                setImagemPerfil(resposta.data.imagemPerfil);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    function fileSelectedHandler(event) {
        setImage({
            selectedFile: event.target.files[0]
        });
        setPreview(URL.createObjectURL(event.target.files[0]));
    }

    let imagemDoCliente =
        sessionStorage.IMG_PERFIL !== "https://petsupstorage.blob.core.windows.net/imagesstorage/null" &&
        sessionStorage.IMG_PERFIL !== "https://petsupstorage.blob.core.windows.net/imagesstorage/"
            ? sessionStorage.IMG_PERFIL
            : imgUser;

    return (
        <div className="container-img-perfil">
            <div className="img-user-perfil">
                <img src={image.selectedFile ? preview : imagemDoCliente} alt="User Profile" />
            </div>
            <label htmlFor="input-imagem" className="label-imagem">
                Editar imagem
                <input className="input-imagem" id="input-upload" type="file" onChange={fileSelectedHandler} />
            </label>
        </div>
    );
}

export function editarFotoPerfil() {
    const fd = new FormData()
    if (image.selectedFile != null) fd.append('image', image.selectedFile, image.selectedFile.name);

    api.put(`/clientes/atualizar-imagem/${sessionStorage.ID_CLIENTE}`, fd, {
        headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`
        }
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default PreviewImagem;
