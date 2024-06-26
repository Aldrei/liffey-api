import { AnalyticsSetup, AuthClientsSetup, AuthTokensSetup, BannersSetup, CitiesSetup, ClientsSetup, ContentsSetup, DomainsSetup, EmailsSetup, EmployeesEmailsSetup, EmployeesSetup, MessagesSetup, NeighborhoodsSetup, OrdersSetup, OwnersSetup, PalettesSetup, PasswordsResetsSetup, PaymentsCategoriesSetup, PaymentsSetup, PaypalWebProfileSetup, PhotosSetup, PlansSetup, PropertiesAgenciesSetup, PropertiesSetup, ProspectsSetup, ReceivablesCategoriesSetup, ReceivablesSetup, RoleUserSetup, RolesSetup, StatesSetup, SubscriptionsSetup, ThemesSetup, UsersSetup, VideosSetup } from "@/database/models"

export const syncTables = async () => {
  try {
    await AnalyticsSetup.syncTable()
    await BannersSetup.syncTable()
    await CitiesSetup.syncTable()
    await ClientsSetup.syncTable()
    await ContentsSetup.syncTable()
    await DomainsSetup.syncTable()
    await EmailsSetup.syncTable() 
    await EmployeesSetup.syncTable() 
    await EmployeesEmailsSetup.syncTable()
    await MessagesSetup.syncTable()

    // Deprecated
    // await Migration.sync({ force: true })

    await NeighborhoodsSetup.syncTable()
    await OrdersSetup.syncTable()
    await OwnersSetup.syncTable()
    await PalettesSetup.syncTable()
    await PasswordsResetsSetup.syncTable()
    await PaymentsCategoriesSetup.syncTable()
    await PaymentsSetup.syncTable()
    await PaypalWebProfileSetup.syncTable()
    await PhotosSetup.syncTable()
    await PlansSetup.syncTable()
    await PropertiesSetup.syncTable()
    await PropertiesAgenciesSetup.syncTable()
    await ProspectsSetup.syncTable()
    await ReceivablesSetup.syncTable()
    await ReceivablesCategoriesSetup.syncTable()
    await StatesSetup.syncTable()
    await SubscriptionsSetup.syncTable()
    await ThemesSetup.syncTable()
    await UsersSetup.syncTable()
    await RolesSetup.syncTable()
    await RoleUserSetup.syncTable()
    await VideosSetup.syncTable()
    await AuthTokensSetup.syncTable()
    await AuthClientsSetup.syncTable()
  } catch (error) {
    console.error(error);
  }
}