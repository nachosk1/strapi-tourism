import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    icon: 'alien';
  };
  attributes: {
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
  };
}

export interface CategoryCategory extends Struct.ComponentSchema {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface DurationDuration extends Struct.ComponentSchema {
  collectionName: 'components_duration_durations';
  info: {
    displayName: 'duration';
  };
  attributes: {
    end: Schema.Attribute.Date;
    start: Schema.Attribute.Date;
  };
}

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.button': ButtonButton;
      'category.category': CategoryCategory;
      'duration.duration': DurationDuration;
      'location.location': LocationLocation;
    }
  }
}
