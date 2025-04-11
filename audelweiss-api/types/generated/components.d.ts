import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardsList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards_lists';
  info: {
    description: '';
    displayName: 'CardsList';
    icon: 'apps';
  };
  attributes: {
    card: Schema.Attribute.Component<'component.card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    callToAction: Schema.Attribute.Component<'link.link', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.Text;
  };
}

export interface BlocksImageAndText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_and_texts';
  info: {
    description: '';
    displayName: 'ImageAndText';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlocksQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ComponentCard extends Struct.ComponentSchema {
  collectionName: 'components_component_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavHeaderNav extends Struct.ComponentSchema {
  collectionName: 'components_nav_header_navs';
  info: {
    description: '';
    displayName: 'LinkList';
    icon: 'bulletList';
  };
  attributes: {
    navItems: Schema.Attribute.Component<'link.link', true>;
    navTitle: Schema.Attribute.Component<'link.link', false> &
      Schema.Attribute.Required;
  };
}

export interface NavNav extends Struct.ComponentSchema {
  collectionName: 'components_nav_navs';
  info: {
    description: '';
    displayName: 'Nav';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'link.link', true> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cards-list': BlocksCardsList;
      'blocks.hero': BlocksHero;
      'blocks.image-and-text': BlocksImageAndText;
      'blocks.quote': BlocksQuote;
      'component.card': ComponentCard;
      'link.link': LinkLink;
      'nav.header-nav': NavHeaderNav;
      'nav.nav': NavNav;
    }
  }
}
