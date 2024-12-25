import React, { useEffect } from 'react'
import styles from "./_detales.module.scss"
import GreenButton from '../../ui/greenButton/GreenButton'
import BlueButton from '../../ui/blueButton/BlueButton'
import { useSelector } from 'react-redux';
function Detales({ product,onAddToBasket }) {
    
  const { user } = useSelector((state) => state.user);

 
    
    console.log(product)
    return (
        <div className={styles.detales}>
            <div className={styles.detales_price}>
                <GreenButton {...product} />
                <BlueButton el={product}  onAddToBasket={onAddToBasket}/>
            </div>
            <div className={styles.detales_blocks}>
            <div className={styles.detales_block}><h2>{product.title}</h2></div>
            {
                user.role==="admin"&& <div className={styles.detales_block}>
                <span>Артикул:</span>
                <p>№ {product.artikul}</p>

            </div>
            }
               
                <div className={styles.detales_block}>
                    <span>Марка:</span>
                    <p>{product.marka}</p>

                </div>
                <div className={styles.detales_block}>
                    <span>Модель:</span>
                    <p>{product.model}</p>

                </div>
                <div className={styles.detales_block}>
                    <span>Поколение:</span>
                    <p>{product.generation}</p>

                </div>
                <div className={styles.detales_block}>
                    <span>Год:</span>
                    <p>{product.year}</p>

                </div>
                <div className={styles.detales_block}>
                    <span>Номер запчасти:</span>
                    <p>{product.spare_part_number}</p>

                </div>

            </div>
            <div className={styles.detales_texts}>
                <h4>Примечание:</h4>
                <p>{product.description}</p>

            </div>

        </div>
    )
}

export default Detales
