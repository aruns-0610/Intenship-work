import thirs from '../styles/thirs.module.css';
function Third(){
    return(
        <div className="third">
            <h1 className={thirs["third-heading"]}>About Us</h1>
            <div className={thirs["box"]}> 
                <div className={thirs["third-container"]}>
                    <div className={thirs.top}>
                        <div className={thirs.avatar} style={{backgroundImage:'url("/FOUNDER.png")'}}></div>
                        <h1>Sivasamy</h1>
                    </div>
                    <div className={thirs.content}>
                        <p>Sivasamy, the founder of SSV Traders, is a visionary entrepreneur with a passion for innovation. Armed with a years of experience in the tech industry and gem industries . Periyasamy known for his relentless drive and ability to inspire others, Periyasamy has led SSV Traders to become a leading player in the industry, with a focus on cutting-edge products and exceptional customer experience. Through his leadership continues to shape the future of technology and inspire the next generation of entrepreneurs.</p>
                    </div>
                </div>

                <div className={thirs["third-container"]}>
                    <div className={thirs.top}>
                        <div className={thirs.avatar} style={{backgroundImage:'url("GOKUL.jpg")'}} ></div>
                        <h1>Gokul</h1>
                    </div>
                    <div className={thirs.content}>
                        <p>CEO of SSV Traders Mr.Gokul Thangavel brings a wealth of experience and leadership to the company. With a background in business administration and a keen eye for market trends, Gokul has guided SSV Traders through periods of rapid growth and market expansion. Under his stewardship, the company has solidified its position as a leader in the tech industry, delivering innovative products and solutions to customers worldwide. Gokul`&#39;`s strategic vision, coupled with his commitment to fostering a culture of collaboration .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third;