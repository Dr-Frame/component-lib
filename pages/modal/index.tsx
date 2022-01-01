import Modal from '../../components/Modal';
import Button from '../../components/Button';
import { useState } from 'react';
import s from './modalPage.module.scss';

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={s.wrapper}>
      <Button
        as="button"
        uppercase
        animation="mouseRipple"
        onClick={() => setIsModalOpen(true)}
      >
        open modal
      </Button>
      <Modal active={isModalOpen} setActive={setIsModalOpen}>
        necessitatibus reprehenderit impedit autem distinctio eos modi aut
        repudiandae eveniet est magni iusto alias minima architecto ab adipisci
        tenetur excepturi itaque provident inventore repellat nemo ab maiores
        quae dolores, reiciendis, recusandae quisquam quibusdam facilis. Officia
        dignissimos ad labore rerum ea eveniet assumenda voluptate laboriosam
        odio saepe quidem ipsum dolorem laudantium pariatur architecto, fugit
        ducimus voluptatibus suscipit nam voluptatem? Ipsum veritatis officia,
        vero rem excepturi dolore accusamus blanditiis magni eum dicta, eius
        fuga nobis error sed temporibus voluptatem quibusdam quo ratione! Illum
        ipsam odio, saepe voluptatum cumque non, doloremque eos officiis hic
        corporis quas, sunt dignissimos quisquam itaque minus accusamus.
        Voluptatem debitis labore iusto sequi consectetur ipsum numquam
        reiciendis neque odit, esse ipsa eius nesciunt quod modi nulla, impedit,
        dolorem nostrum. Reprehenderit a magnam, dolor sed accusantium
        laudantium quaerat vel amet itaque minus qui quae eveniet similique
        dignissimos iure repellendus officiis. Ab provident est praesentium qui
        consectetur officiis eligendi alias laudantium cum voluptatum facere
        odio, id ipsum, omnis fugiat dolores, reiciendis assumenda reprehenderit
        ipsa. Nesciunt perferendis id beatae veniam libero. Optio cum eum vitae
        voluptate aut repellendus laudantium aliquam, rerum modi ab totam,
        quibusdam repellat eos, reiciendis quasi! Cupiditate necessitatibus
      </Modal>
    </div>
  );
}

export default ModalPage;
