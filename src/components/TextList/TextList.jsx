import styles from  "./TextList.module.scss";

const TextList = () => {


    return (
        <section className={styles.main}>
          <div className={styles['main-title'] + "my-4 text-center"}>
            About <strong>Archiproducts</strong>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
                dolorum laboriosam dolores magni deserunt, corporis illum laudantium
                repudiandae quas obcaecati temporibus ullam, quisquam praesentium unde
                voluptatibus quia voluptates sint enim.
              </article>
            </div>
            <div className="col-12 col-md-6">
              <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
                dolorum laboriosam dolores magni deserunt, corporis illum laudantium
                repudiandae quas obcaecati temporibus ullam, quisquam praesentium unde
                voluptatibus quia voluptates sint enim.
              </article>
            </div>
          </div>
          <div className="subtitle my-4"><strong>Categories</strong></div>
          <div className="row">
            <div className={"col-12 " + styles.columns}>
              <ul>
                <li>Arredo</li>
                <li>Bagno</li>
                <li>Cucina</li>
                <li>Outdoor</li>
                <li>Ufficio</li>
                <li>Illuminazione</li>
                <li>Wellness</li>
                <li>XXXX</li>
                <li>DDDDD</li>
                <li>DDDDDDD</li>
              </ul>
            </div>
          </div>
        </section>            
    )



}

export default TextList;