'use client'

import { useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import SearchSelect from './SearchSelect/SearchSelect';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';



const SearchBar = ({section = 'home'}) => {

  const [brands, setBrands] = useState();
  const [activeBrand, setActiveBrand] = useState();
  const [models, setModels] = useState();
  const [activeModel, setActiveModel] = useState();
  const [activeCondition, setActiveCondition] = useState();



  const searchParams = useSearchParams();
  const { replace } = useRouter();



  useEffect(() => {
    const getBrands = async () => {
      const res = await axios.get(`http://localhost:5000/v1/brands`);
      setBrands(res.data)
    } 
    getBrands()
  }, [])


  useEffect(() => {
    const getModels = async () => {
      const res = await axios.get(`http://localhost:5000/v1/models/${activeBrand}`);
      setModels(res.data)
    } 
    if(activeBrand) {
      getModels()
      return setActiveModel(null)
    } else {
      return setModels([]);
    }
  }, [activeBrand])


  const handleSearch = (e) => {

    e.preventDefault()

    const params = new URLSearchParams(searchParams);

    params.set('page', 1);

    if (activeBrand) {
      params.set('brand', activeBrand);
    } else {
      params.delete('brand');
    }
  
    if (activeModel) {
      params.set('model', activeModel);
    } else {
      params.delete('model');
    }
  
    if (activeCondition) {
      let condition = activeCondition === 1 ? 'used' : 'new';
      params.set('condition', condition);
    } else {
      params.delete('condition');
    }

    replace(`/search?${params.toString()}`)

  }


  const classMap = {
    'home': styles.homeContainer,
    'search': styles.searchContainer,
  }
  


  return (
    <div className={classMap[section]}>
      <form className={styles.wrapper}>
        <SearchSelect left={true} category={'brand'} options={brands} setOption={setActiveBrand} />
        <SearchSelect category={'model'} options={models} setOption={setActiveModel} />
        <SearchSelect options={[{_id: 0, name: 'new'}, {_id: 1, name: 'used'}]} category={'condition'} setOption={setActiveCondition} />
        <button onClick={handleSearch} className={styles.button}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
