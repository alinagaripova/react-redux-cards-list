/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import TableSearch from '../TableSearch';
import Tags from '../Tags';
import Description from '../Description';

// eslint-disable-next-line react/prop-types
const PokemonTable = React.memo(({ allPokemonsData, loading }) => {
  const pokemonsList = useSelector((state) => state.pokemon.pokemonsList);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
      total: pokemonsList.length,
      showSizeChanger: true,
    },
  });

  // function getPokemons1() {
  //   fetch('https://pokeapi.co/api/v2/pokemon')
  //     .then((response) => response.json())
  //     .then((pokemons) => {
  //       setTableParams({
  //         ...tableParams,
  //         pagination: {
  //           ...tableParams.pagination,
  //           total: pokemons.results?.length,
  //           showSizeChanger: true,
  //         },
  //       });
  //       Promise.all(
  //         pokemons.results.map(({ url }) => fetch(url).then((resp) => resp.json())),
  //       ).then((data) => {
  //         dispatch(getPokemons(data));
  //         setLoading(false);
  //       });
  //     });
  //   // eslint-disable-next-line no-debugger
  //   // debugger;
  // }

  // useEffect(() => {
  //   getPokemons1();
  // }, [tableParams]);

  // const handleTableChange = (pagination, filters, sorter) => {
  //   setTableParams({
  //     pagination,
  //     filters,
  //     ...sorter,
  //   });

  //   if (pagination.pageSize !== tableParams.pagination?.pageSize) {
  //     dispatch(getPokemons([]));
  //   }
  // };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      ...TableSearch().getColumnSearchProps('name'),
    },
    {
      title: 'Avatar',
      dataIndex: 'sprites',
      key: 'sprites',
      width: '25%',
      align: 'center',
      render: (img) => <img src={img.front_default} alt={img} />,
    },
    {
      title: 'Types',
      dataIndex: 'types',
      key: 'types',
      ...TableSearch().getColumnSearchProps('types', true),
      render: (tags) => (
        <Tags tags={tags} />
      ),
    },
  ];

  const handleTableChange = useCallback((pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  }, []);

  return (
    <div className="pokemon-table">
      <Table
        columns={columns}
        dataSource={allPokemonsData}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        rowKey="id"
        bordered
        size="middle"
        title={() => 'Pokemon cards. Press + to show more information'}
        expandable={{
          expandedRowRender:
            ({ weight, height }) => <Description weight={weight} height={height} />,
        }}
      />
    </div>
  );
});

export default PokemonTable;
