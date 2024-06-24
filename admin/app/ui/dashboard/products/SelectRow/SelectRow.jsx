'use client'

import { useEffect, useState } from 'react';
import styles from './selectRow.module.css';
import axios from 'axios';
import { BASE_URL } from '@/app/lib/httpRequests';




const SelectRow = ({brands, placeholder1, placeholder2}) => {

    const [activeBrand, setActiveBrand] = useState();
    const [models, setModels] = useState();
    const [activeModel, setActiveModel] = useState(placeholder2)

    
    useEffect(() => {
        const getModels = async () => {
            const res = await axios.get(`${BASE_URL}/models/${activeBrand}`);
            setModels(res.data);
        }
        if(activeBrand) {
            getModels()
            return setActiveModel(null)
        } else {
            return setModels([]);
        }
    }, [activeBrand]);


    const handleChangeBrand = (e) => {
        setActiveBrand(e.target.value)
    }



  return (
    <div className={styles.selectContainer}>
        <div className={styles.container}>
            <div className={styles.labelContainer}>
                <label className={styles.label}>Brand</label>
            </div>
            <select className={styles.select} type='text' name='brand' required={true} onChange={handleChangeBrand}>
                {placeholder1 ? 
                    <option defaultValue={placeholder1}>{placeholder1}</option>
                    :
                    <option></option>
                }
                {brands?.map((cat) => {
                    return(
                        <option value={cat._id} key={cat._id} className={styles.options}>{cat.name}</option>
                    )
                })}
            </select>
        </div>
        <div className={styles.container}>
            <div className={styles.labelContainer}>
                <label className={styles.label}>Models</label>
            </div>
            <select className={styles.select} type='text' name='model' required={true}>
                {activeModel ? 
                    <option defaultValue={activeModel._id}>{activeModel.name}</option>
                    :
                    <option></option>
                }
                {models?.map((cat) => {
                    return(
                        <option value={cat._id} key={cat._id} className={styles.options}>{cat.name}</option>
                    )
                })}
            </select>
        </div>
    </div>
  )
}

export default SelectRow
