import Expand from './Expand';
function About() {
  return (
    <>
      <Expand title="What vaccines does my cat need?">
        <p>The choice of which vaccines your cat should receive is dependent on a number of factors including your cat’s risk of exposure to the disease-causing organisms, the consequence of infection and the risk an infected cat poses to human health.</p>
      </Expand>
      <Expand title="What do vaccines do?">
        <p>Vaccines are given to prepare the body’s immune system against invasion by a particular disease-causing organism. Vaccines contain antigens, which are non-infectious particles that, to the immune system, look like the disease-causing organism. When the vaccine is introduced to the body the immune system responds to the antigens by producing antibodies.</p>
        <p>These antibodies are a protective response, meaning that if the cat is subsequently exposed to the infectious organism, the immune system is prepared and either prevents infection or reduces the severity of disease.</p>
      </Expand>
      <Expand title="Should I test my cat for FeLV/FIV?">
        <p>Feline Leukemia (FeLV) and Feline Immunodeficiency Virus (FIV) are serious diseases spread to cats by other cats. All cats should be tested for FeLV and FIV infection at the time of adoption or if they become ill. This is particularly important for cats in multi-cat households, but it is also important for cats in single-cat households, because either of these infections will impact a cat’s health status and long-term management</p>
      </Expand>
      <Expand title="When should I spay/neuter my kitten?">
        <p>It is recommended to spay / neuter at 5-6 months of age before the first heat or sexual maturity. These procedures are performed under a general anesthetic with intravenous fluid therapy and post operative pain management. We highly recommend tattoo and / or microchip identification be done at this time for the safety and wellbeing of your kitty.</p>
      </Expand>
    </>
  );
}

export default About;