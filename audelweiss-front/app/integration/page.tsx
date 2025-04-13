"use client";

import CustomTitle from "@/src/components/atoms/CustomTitle";
import Button from "@/src/components/atoms/Button";
import CustomLink from "@/src/components/atoms/CustomLink";

export default function BuildComponents() {
  return (
    <main>
      <div className="inner-wrap">
        <CustomTitle level={1}>Titre h1 (font-size : 40px par défaut)</CustomTitle>

        <br></br>

        <CustomTitle level={2}>Titre h2 (font-size : 40px par défaut)</CustomTitle>

        <br></br>

        <CustomTitle level={3}>Titre h3 (font-size : 40px par défaut)</CustomTitle>

        <br></br>

        <CustomTitle level={2} className="text-[3rem]">
          Titre h2 avec font-size à 30px
        </CustomTitle>

        <br></br>

        <CustomTitle level={2} className="text-[2rem]">
          Titre h2 avec font-size à 20px
        </CustomTitle>

        <br></br>

        {/* Attention : Dès qu'on précise quelquechose dans la props 'className', 
                on est obligé d'indiquer aussi la classe pour la font-size (plus de font-size par défaut) */}
        <CustomTitle level={2} className="text-primary text-[4rem]">
          Titre h2 rose 40px
        </CustomTitle>

        <br></br>

        {/* Attention : Dès qu'on précise quelquechose dans la props 'className', 
                on est obligé d'indiquer aussi la classe pour la font-size (plus de font-size par défaut) */}
        <CustomTitle level={3} className="text-secondary text-[3rem]">
          Titre h3 violet 30px
        </CustomTitle>

        <br></br>

        <Button withIcon>Bouton rose avec flèche</Button>

        <br></br>
        <br></br>

        <Button className="bg-secondary hover:bg-dark-secondary" onClick={() => alert("Tu as cliqué !")}>
          Bouton violet sans flèche, qui se déclanche au clic
        </Button>

        <br></br>
        <br></br>

        <CustomLink href="#_" className="text-primary as--underline-hover">
          Lien classique rose
        </CustomLink>

        <br></br>
        <br></br>

        <CustomLink href="#_" className="text-secondary as--underline-hover">
          Lien classique violet
        </CustomLink>

        <br></br>
        <br></br>

        <CustomLink href="#_" isButtonLink className="bg-primary hover:bg-dark-primary" withIcon>
          Lien sous forme de bouton rose avec flèche
        </CustomLink>

        <br></br>
        <br></br>

        <CustomLink
          href="https://github.com"
          target="_blank"
          isButtonLink
          className="bg-secondary hover:bg-dark-secondary"
          withIcon
        >
          Lien externe sous forme de bouton violet avec flèche
        </CustomLink>

        <br></br>
        <br></br>

        <CustomLink href="#_" isButtonLink className="bg-primary hover:bg-dark-primary">
          Lien sous forme de bouton rose sans flèche
        </CustomLink>

        <br></br>
        <br></br>
      </div>
    </main>
  );
}
