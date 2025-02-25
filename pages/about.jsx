const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <h4>My name is Adel, I love programming, <br /> and I specialize in front-end development. <br /> I love to learn everything new in the world of programming,<br /> and I am always developing.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
