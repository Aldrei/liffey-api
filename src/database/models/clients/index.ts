import db from '@/database/instance'; // Replace with your actual path to the Sequelize instance
import { Cities, Neighborhoods, Palettes, Themes, Users } from '@/database/models';
import { DataTypes, Model } from 'sequelize';

// Define the interface for the clients model
export interface IClient {
  id?: number;
  user_id: number;
  city_id?: number | null;
  neighborhood_id?: number | null;
  last_name_for_payment: string;
  first_name_for_payment: string;
  cnpj_for_payment: string;
  cpf_for_payment?: string | null;
  theme_id?: number | null;
  palette_id?: number | null;
  address: string;
  ssl: boolean;
  domain?: string | null;
  name: string;
  abbreviation: string;
  creci: string;
  phone1: string;
  phone2: string;
  phone3: string;
  email1: string;
  email2: string;
  email3: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  og_image: string;
  logo: string;
  icon: string;
  favicon: string;
  watermark?: string | null;
  map: string;
  page_home: boolean;
  page_about: boolean;
  page_contact: boolean;
  page_financing: boolean;
  page_enterprise: boolean;
  page_properties: boolean;
  page_property: boolean;
  property_count: number;
  created_at?: Date;
  updated_at?: Date;
}

// Define the Clients model with the interface and extend Model
export interface ClientModel extends Model<IClient>, IClient {}

export const Clients = db.define<ClientModel>('Client', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  city_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  neighborhood_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  last_name_for_payment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name_for_payment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj_for_payment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf_for_payment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  theme_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  palette_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ssl: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  domain: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  abbreviation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creci: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  whatsapp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instagram: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  youtube: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linkedin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  og_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favicon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  watermark: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  map: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  page_home: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  page_about: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  page_contact: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  page_financing: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  page_enterprise: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  page_properties: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  page_property: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  property_count: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 1,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: 'CURRENT_TIMESTAMP',
  },
}, {
  tableName: 'clients',
  collate: 'utf8_unicode_ci',
  timestamps: false
});

export const ClientsSetup = {
  syncTable: async () => await Clients.sync({ force: true }),
  syncRelationships: async () => {
    // Application level.
    Clients.belongsTo(Cities, { foreignKey: 'city_id', onDelete: 'CASCADE' });
    Clients.belongsTo(Neighborhoods, { foreignKey: 'neighborhood_id', onDelete: 'CASCADE' });
    Clients.belongsTo(Themes, { foreignKey: 'theme_id', onDelete: 'CASCADE' });
    Clients.belongsTo(Palettes, { foreignKey: 'palette_id', onDelete: 'CASCADE' });
    Clients.belongsTo(Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });

    // Database level.
    await db.query(`
      ALTER TABLE clients
      ADD UNIQUE KEY clients_domain_unique (domain),
      ADD KEY clients_user_id_foreign (user_id),
      ADD KEY clients_city_id_foreign (city_id),
      ADD KEY clients_neighborhood_id_foreign (neighborhood_id),
      ADD KEY clients_theme_id_foreign (theme_id),
      ADD KEY clients_palette_id_foreign (palette_id);
    `, { raw: true })

    await db.query(`
      ALTER TABLE clients
      MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
    `, { raw: true })

    await db.query(`
      ALTER TABLE clients
      ADD CONSTRAINT clients_city_id_foreign FOREIGN KEY (city_id) REFERENCES cities (id),
      ADD CONSTRAINT clients_neighborhood_id_foreign FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods (id),
      ADD CONSTRAINT clients_palette_id_foreign FOREIGN KEY (palette_id) REFERENCES palettes (id),
      ADD CONSTRAINT clients_theme_id_foreign FOREIGN KEY (theme_id) REFERENCES themes (id),
      ADD CONSTRAINT clients_user_id_foreign FOREIGN KEY (user_id) REFERENCES users (id);
    `, { raw: true })
  }
}
