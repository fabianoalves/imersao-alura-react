import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const { handleChangeValue, values } = useForm({});
  const [categorias, setCategorias] = useState([]);
  const categoriyTitles = categorias.map(({ titulo }) => titulo);
  console.log(categoriyTitles);
  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoResponse) => {
        setCategorias(categoResponse);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((cat) => cat.titulo === values.categoria);
        console.log('vsdvsd', categoriaEscolhida);
        
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Cadastrado com sucesso!');
          history.push('/');
        });
      }}
      >

        <FormField
          label="Titulo do video:"
          value={values.titulo}
          name="titulo"
          onChange={handleChangeValue}
        />

        <FormField
          label="URL:"
          value={values.url}
          name="url"
          onChange={handleChangeValue}
        />

        <FormField
          label="Categoria:"
          value={values.categoria}
          name="categoria"
          type="text"
          onChange={handleChangeValue}
          suggestions={categoriyTitles}
        />

        <Button>
          Cadastrar
        </Button>


      </form>



      <Link to="/cadastro/categoria/">Cadastrar Categoria</Link>
    </PageDefault>
  );
}
export default CadastroVideo;
