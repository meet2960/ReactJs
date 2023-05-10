import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../Redux/product/action";

const Home = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => ({
    productData: state.product.products,
  }));
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <p className="justify-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          corporis itaque nemo, qui rem sed tempore voluptates. Dolor, odio,
          recusandae. Ab accusantium adipisci, assumenda debitis dignissimos
          doloribus ducimus eligendi error est et facilis, fuga harum id illo
          laboriosam libero minus nisi numquam omnis praesentium, quae quaerat
          quibusdam quidem quod repellat saepe voluptatum. Ad amet assumenda
          consequatur corporis cumque dicta eos, error mollitia nam neque
          officia omnis quia repellendus suscipit temporibus ullam voluptatibus
          voluptatum. A ad, alias aspernatur commodi corporis culpa cum
          cupiditate delectus ducimus ea eaque eius eum eveniet hic illo iste
          itaque, iure nihil officia placeat quasi quibusdam quidem quos
          recusandae repudiandae saepe tenetur voluptates? Ad cum doloremque
          eaque earum esse, exercitationem laborum quia reiciendis sint soluta
          vel, velit voluptate voluptatibus? Beatae deleniti ea eius iure
          officiis voluptatibus. Alias asperiores atque blanditiis commodi,
          deserunt doloremque esse eum fugiat hic id illum impedit ipsum
          laboriosam minima minus molestiae necessitatibus nobis nostrum omnis
          quasi quibusdam quod recusandae reiciendis rem repudiandae rerum sit
          tempora tenetur vel velit veritatis vitae voluptatem voluptates? Ab
          asperiores aut dicta ducimus ex harum ipsum natus officia omnis,
          placeat quod rem rerum, voluptatibus. Adipisci, consequuntur,
          incidunt. Alias aperiam dicta earum eius facere facilis impedit ipsa
          libero qui. Aliquam amet autem corporis culpa deserunt doloremque, ea
          error eum expedita explicabo in incidunt ipsa magni necessitatibus
          nobis odit officia quae quasi quo reprehenderit repudiandae saepe sint
          unde vel velit. Asperiores, at autem consectetur consequatur et ex
          excepturi facere illo impedit, itaque libero odit pariatur
          perspiciatis quam quia recusandae vero. Assumenda fugiat ipsa maxime
          porro vel. Consectetur delectus deleniti dicta ipsam, iure minus
          officia repudiandae! Aliquid aspernatur commodi dolore dolores eius
          enim eos est illo iusto labore mollitia necessitatibus nobis provident
          quasi, quibusdam quisquam, quod tempora tempore, vel voluptatum? Ab
          autem beatae ipsum quidem! Alias at corporis culpa delectus earum,
          impedit ipsum iste iusto, laborum magni neque non pariatur quasi
          recusandae, tempora temporibus totam voluptatem? Aliquid, aperiam
          dolores magnam magni nobis omnis quidem! Accusamus at debitis delectus
          doloribus dolorum ducimus enim explicabo in laborum laudantium,
          maiores molestias, mollitia nam natus necessitatibus nobis numquam
          possimus qui quod quos repellendus repudiandae sed similique, suscipit
          ut! Accusamus accusantium aspernatur dignissimos, distinctio et ipsam
          minus modi natus nemo quia quidem quo quod recusandae, repudiandae
          sint unde vero voluptate! Asperiores atque blanditiis corporis
          cupiditate delectus dolorem, doloribus earum error illum in modi
          molestias natus numquam officiis quaerat quia quis quod rem repellat
          reprehenderit sit totam vel veniam. Architecto atque beatae commodi
          consequatur consequuntur culpa cumque, dolorem doloribus dolorum ea,
          earum enim esse et eum exercitationem hic illo labore laboriosam
          maiores nulla perferendis placeat qui quia quisquam ratione rem rerum
          similique soluta, totam ullam velit voluptas voluptatem voluptates?
          Accusamus ea fuga minus nihil. Aliquid incidunt labore molestiae nisi
          obcaecati possimus recusandae. A ad consequuntur debitis deserunt
          dignissimos dolor doloremque, eligendi ex fuga, fugiat laboriosam
          minus modi natus nihil nisi nostrum obcaecati pariatur quidem quis
          repudiandae saepe, suscipit ullam voluptatum. Adipisci aliquam,
          architecto autem blanditiis culpa dolor doloremque eaque impedit
          magni, maiores nam natus quam ratione repellendus tempora.
        </p>
      </Container>
    </React.Fragment>
  );
};

export default Home;