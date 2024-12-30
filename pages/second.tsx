import styles from '../styles/services.module.css'
function Second() {
    return(
        <div className={styles.second}>
            <h1 className={styles["second-heading"]}>
                Our Services
            </h1>
            <hr className={styles.hr}></hr>

            <div className={styles.slider}>
            <div className={styles["second-container"]} style={{
                    backgroundImage: 'url("/diamond.jpg")',
            }}>
                <h1>Diamond Cutting</h1>
            </div>

                <div className={styles["second-container"]} style={{
                    backgroundImage: 'url("/free.jpg")',
            }}>
                <h1>Freelancing</h1>
                </div>

                <div className={styles["second-container"]} style={{
                    backgroundImage: 'url("/coffe.jpg")',
                    backgroundPosition:'left'
            }}>
                <h1>Coffee</h1>
                    
                </div>

                <div className={styles["second-container"]} style={{
                    backgroundImage:'url("/gold.jpg")'
                }}>
                    <h1>Financing</h1>
                </div>

            </div>
            
        </div>
    )
}

export default Second;