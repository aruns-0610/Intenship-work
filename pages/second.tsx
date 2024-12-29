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
            </div>

                <div className={styles["second-container"]} style={{
                    backgroundImage: 'url("/free.jpg")',
            }}>
                </div>

                <div className={styles["second-container"]} style={{
                    backgroundImage: 'url("/coffe.jpg")',
                    backgroundPosition:'left'
            }}>
                    
                </div>

                <div className={styles["second-container"]} style={{
                    backgroundImage:'url("/gold.jpg")'
                }}>
                    <p>Financing is the process of providing funds for business activities, investments, or personal needs, often through loans, credit, or equity. It enables individuals and organizations to achieve their goals by leveraging external resources.</p>
                </div>

            </div>
            
        </div>
    )
}

export default Second;