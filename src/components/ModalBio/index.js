import Image from 'next/image';
import style from './style.module.scss';
import Close from '/public/images/close.svg?svgr';
import { motion } from 'framer-motion';

export default function ModalBio({ setModalBio }) {
  return (
    <motion.div
      className={style.container}
      key='modalbio'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className={style['content-wrapper']}>
        <Close className={style.close} onClick={() => setModalBio(false)} />
        <div className={style.overlay}>
          <Image
            src='/images/begotten-texture.png'
            width={1000}
            height={0}
            alt='texture'
            priority='true'
          />
        </div>
        {/* Left */}
        <div className={style.left}>
          <div className={style.image}>
            <Image
              src='/images/begotten-bio.png'
              alt='Bio image'
              width={1000}
              height={0}
              priority={true}
              style={{ marginBottom: '20px' }}
            />
            <Image
              src='/images/begotten-logo.png'
              alt='Logo'
              width={500}
              height={0}
              priority={true}
            />
          </div>
        </div>
        {/* Right */}
        <div className={style.right}>
          <div className={style.desc}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              ex debitis explicabo ratione, dicta hic excepturi harum nesciunt
              enim nisi optio numquam, nam reiciendis adipisci ea totam maiores
              culpa quidem sit dolorum illo vitae, inventore eum. Iusto labore
              corrupti molestiae, consectetur dolorem illum. Aenean laoreet nisi
              non lacus egestas, nec lobortis mi tristique. Praesent varius
              rhoncus libero, sed efficitur est efficitur in. Mauris hendrerit
              neque vestibulum erat cursus lacinia. Nulla nunc ante, semper ut
              volutpat non, aliquam eget quam. Vestibulum eleifend erat feugiat
              ligula molestie, eu aliquet tellus commodo. Phasellus vel justo ac
              justo gravida sollicitudin eget id magna. Aenean a dolor eu neque
              maximus accumsan a at felis. Maecenas id tristique metus.
              Phasellus sed augue eget turpis convallis hendrerit.
            </p>
          </div>
          <div>
            <div className={style['info-section']}>
              <div className={style['first-section']}>
                <h3>Canadian DSBM</h3>
              </div>
              <div className={style['second-section']}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Libero animi possimus deleniti consequatur earum esse nulla
                  incidunt sint modi, ex, asperiores, reprehenderit inventore
                  dicta optio eligendi quidem quo quam! Nihil veniam iusto qui
                  inventore, ab esse, voluptates ipsam itaque ipsa reprehenderit
                  cum numquam repellat. Optio, eaque magni? Corrupti, obcaecati
                  dignissimos?
                </p>
              </div>
            </div>
            <div className={style['info-section']}>
              <div className={style['first-section']}>
                <h3>Pickering, Ontario</h3>
              </div>
              <div className={style['second-section']}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  ab soluta, accusantium minima non sunt quis sapiente
                  laboriosam delectus vitae earum iusto saepe praesentium nobis
                  ipsa nisi eveniet modi. Facere incidunt id minus corporis
                  dolor odit beatae alias ut officiis. Explicabo voluptatum
                  totam possimus vel. Donec in orci quis turpis dignissim
                  mollis. Nunc vitae tempus neque. Suspendisse id leo neque.
                  Quisque vulputate rhoncus quam, id condimentum lorem molestie
                  vitae. Vestibulum sollicitudin quis dolor ac euismod.
                  Suspendisse mauris mi, vestibulum non iaculis ut, congue
                  elementum felis. Maecenas ornare odio mi, vitae rutrum libero
                  auctor vel. Nullam accumsan sapien quis eros accumsan, at
                  commodo felis imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div className={style['member-section']}>
            <div>
              <h4>Bobby Prentice</h4>
              <p>Guitars, Drums, Bass, Vocals</p>
            </div>
            <div>
              <h4>Dave Sherk</h4>
              <p>Guitars</p>
            </div>
            <div>
              <h4>Thomas Learner</h4>
              <p>Vocals</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
