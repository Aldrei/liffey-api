// Import Sequelize and necessary types
import db from '@/database/instance';
import { DataTypes, Model } from 'sequelize';

// Define the interface for the role_user model
export interface IRoleUser {
  role_name: string;
  user_id: number;
}

// Define the RoleUser model with the interface and extend Model
interface RoleUserModel extends Model<IRoleUser>, IRoleUser {}

// Define the role_user table
export const RoleUser = db.define<RoleUserModel>('RoleUser', {
  role_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    onDelete: 'CASCADE',
  }
}, {
  tableName: 'role_user',
  collate: 'utf8_unicode_ci',
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  }
});

export const RoleUserSetup = {
  syncTable: async () => await RoleUser.sync({ force: true }),
  syncAssociations: async () => {
    // Application level.
    // ...
  },
  syncRelationships: async () => {
    // Database level.
    await db.query(`
      ALTER TABLE role_user
      ADD KEY role_user_role_name_foreign (role_name),
      ADD KEY role_user_user_id_foreign (user_id);
    `, { raw: true })

    await db.query(`
      ALTER TABLE role_user
      ADD CONSTRAINT role_user_role_name_foreign FOREIGN KEY (role_name) REFERENCES roles (name) ON DELETE CASCADE,
      ADD CONSTRAINT role_user_user_id_foreign FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;
    `, { raw: true })
  }
}
