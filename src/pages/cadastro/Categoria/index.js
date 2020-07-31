import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valuesInit = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [values, setValues] = useState(valuesInit);
  const [categorias, setCategorias] = useState([]);

  function setValue(name, value) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleChangeValue(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (resp) => {
        const dadosResp = await resp.json();
        setCategorias([...dadosResp]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valuesInit);
      }}
      >
        <div>

          <FormField
            label="Nome da Categoria:"
            value={values.nome}
            name="nome"
            type="text"
            onChange={handleChangeValue}
          />

          <FormField
            label="Descrição:"
            value={values.descricao}
            name="descricao"
            type="textarea"
            onChange={handleChangeValue}
          />

          <FormField
            label="Cor:"
            value={values.cor}
            name="cor"
            type="color"
            onChange={handleChangeValue}
          />

          {/* <div>
            <label>
              Nome da Categoria:
              <input
                name="nome"
                type="text"
                value={values.nome}
                onChange={handleChangeValue}
              />
            </label>
          </div>

          <div>
            <label>
              Descrição:
              <textarea
                name="descricao"
                value={values.descricao}
                onChange={handleChangeValue}
              />
            </label>
          </div>
          <div>
            <label>
              Cor:
              <input
                name="cor"
                type="color"
                value={values.cor}
                onChange={handleChangeValue}
              />
            </label>
          </div> */}

        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((cat, i) => (
          <li key={`${cat}_${i}`}>
            {cat.nome}
          </li>
        ))}

      </ul>

      <Link to="/">Ir para a Home</Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
