import CardsList from "./modules/CardsList";

type Block = {
  id: string;
  __typename: string;
};

type Props = {
  blocks: Block[];
};

const PageBlocks = ({ blocks }: Props) => {
  return (
    <div className="[&>*]:mt-7 last:[&>*]:mb-7">
      {blocks.map((block: Block) => {
        switch (block.__typename) {
          case "ComponentBlocksCardsList":
            return <CardsList key={`${block.__typename}-${block.id}`} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PageBlocks;
