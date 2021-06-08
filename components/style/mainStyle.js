import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Dimensions, PixelRatio, I18nManager, Platform

} from 'react-native';



export const { width: width, height: height } = Dimensions.get('window');


export default class MainStyle extends Component {
  static returnStyles(IS_RTL) {

    var styles = StyleSheet.create({
      whiteColor: {
        color: "#FFFFFF"
      },
      grayColor: {
        backgroundColor: '#F5F5F5'
      },
      loader: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: 70,
        height: 70,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        left: '50%',
        marginLeft: -35,
        top: height * 0.36,

        bottom:0,
        marginTop: -35,
        zIndex: 10,
      },
      TextStyleReguler: {
        textAlign: 'left',
        fontFamily: strings.FontFamily,
        color: '#000000',
      }
      ,
      TextStyleBold: {
        textAlign: 'left',
        fontFamily: strings.FontFamilybold,
        color: '#000000',
      },
      errorMsg: {
        fontFamily: strings.FontFamily,
        color: '#8DC73D',
        fontSize: 15,

        // marginBottom: 10,
        textAlign: IS_RTL ? 'right' : 'left',
        padding: 4,
      },
      // SplachScreenStyle//
      splashScreenStyle: {
        backgroundColor: '#fff',
        width: width,
        height: height,
      },
      splashScreenView: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: width,
        height: height,

      },
      splashScreenImage:
      {
        alignSelf: 'center', justifyContent: 'center',
      },
      // End SplachScreenStyle//

      ////Slider Style///
      Pagination: {
        position: "absolute",
        top: "95%",
        paddingHorizontal: width * 0.45,
      },
      PaginationContainerStyle: {
        marginTop: height * 0.05
      },
      dotStyle: {
        width: 11,
        height: 11,
        borderRadius: 6,
      },
      dotActiveColor: {
        backgroundColor: "#8DC73F"
      },
      dotInactiveColor: {
        backgroundColor: "#fff",
        borderColor: '#8DC73F',
        borderWidth: 1

      },
      SliderContentContainer: {
        marginTop: 20
      },
      SliderImageStyle:
      {
        justifyContent: 'center',
        alignItems: 'center',
        width: width
      },
      SliderContent: {
        marginTop: 20, paddingLeft: 15,
        paddingRight: 15
      },
      SliderTitle: {
        fontSize: 20,
        color: '#4B4B4B',
        justifyContent: 'center',
        alignSelf: 'center'
      },
      SliderDescription: {
        fontSize: 16, color: '#8E8E8E',
        justifyContent: 'center', alignSelf: 'center',
        marginTop: 10, textAlign: 'center'
      },
      Carousel: {
        flex: 3,
        position: "absolute",
        paddingHorizontal: width * 0.4,
      },
      bannerModeStyle: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 7
      },
      bannerModeTextStyle: {
        color: '#8DC73D',
        fontSize: 20,
        marginRight: 5, marginLeft: 5
      },

      ////End SliderStyle///
      //StartPageStyle//
      StartPageStyle: {
        color: '#8DC73D', fontSize: 18,
        marginRight: 5, marginLeft: 5
      },
      skipContainer: {

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        //  padding: 10
      },
      padding10: {
        padding: 10
      },
      padding5: {
        padding: 5
      },
      //End StartPageStyle//

      ////Login Form Style///
      loginContainer: {
        paddingHorizontal: '13%'
      },
      loginContainer2: {
        backgroundColor: 'white',
        borderTopEndRadius: 30, borderTopStartRadius: 30,
        elevation: 5, top: -10, height: "100%"
      },
      loginImageContainer: {
        backgroundColor: '#F4F7FA'
      },
      logoImageStyle: {
        marginTop: height * 0.07,
        alignSelf: 'center',
        marginBottom: height * 0.07,
      },
      socialContainer: {
        alignSelf: 'center', marginTop: height * 0.05,
        flexDirection: 'row',
      },
      FacebookContainer: {
        backgroundColor: '#4267B2',
        marginRight: 7, width: 125, padding: 3,
        borderRadius: 3, marginVertical: 2
      },
      socialContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '88%'
      },
      FacebookText: {
        color: 'white', fontSize: 14, padding: 5
      },
      googlContainer: {
        backgroundColor: '#FFFFFE',
        borderColor: '#D9D9D9',
        marginLeft: 7, borderWidth: 1,
        width: 125, padding: 3,
        borderRadius: 3, marginVertical: 2
      },
      googleText: {
        color: '#656565', fontSize: 14, padding: 5
      },
      socialOptionStyle: {
        justifyContent: 'center', alignItems: 'center',
        marginTop: height * 0.05, flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#BEBEBE'
      },
      socialOptionText: {
        position: 'absolute', top: -12,
        padding: 7, paddingTop: 1,
        backgroundColor: "#fff", color: '#606060',
        fontSize: 13
      },
      FormIcon: {
        marginTop: 5
      },
      FormContainer:
      {
        paddingHorizontal: '7%',
        marginTop: height * 0.03,
      },

      FormContentStyle: {
        flexDirection: 'row',
        borderColor: '#E5E5E5',
        borderBottomWidth: 1.5,
        paddingBottom: 6,
        marginBottom: 10
      },
      FormTextInputStyle: {
        padding: 0,
        paddingLeft: 8,
        paddingBottom: 6,
        // width: '100%', 
        fontSize: 16,
        color: '#99A0B0', textAlign: IS_RTL ? 'right' : 'left'
      },
      loginButton: {
        borderRadius: 5,
        marginTop: height * 0.03,
        backgroundColor: '#8DC640',
        flexDirection: "row",
        justifyContent: 'center'
      },
      loginbtTitle:
      {
        color: '#FFFFFF', fontSize: 20,
        alignItems: 'center', lineHeight: 40
      },
      dontHaveAccountStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
      },
      DontHaveAnAccount: {
        fontSize: 14,
        color: '#707070',
        paddingTop: 10,
      },
      SignupColor: {
        color: '#707070',
        paddingRight: 5
      },
      paddingHorizontal7: {
        paddingHorizontal: '7%',
      },
      loginGrayText1: {
        color: '#272A3F',
        fontSize: 22,
      },
      loginGrayText2: {
        color: '#6E7989',
        fontSize: 14,
      },
      marginTop15:
      {
        marginTop: 15
      },
      /**OrderItemBox */

      orderText1: {

        color: '#040404',
        fontSize: 16,
      },
      orderText2: {
        color: '#707070',
        fontSize: 14,
      },
      /**OrderItemBox */


      ////End Login Form Style///

      /* MainCatBox - Start */
      roundedImageContainer: {
        overflow: "hidden",
        borderRadius: 60,
        width: width * .2,
        height: width * .2,//can be change as needed size
        margin: 6,
        borderWidth: 2.5,

      },
      mainImage: {
        width: width * .2, height: width * .2 // must be same as 'roundedImageContainer' width and height 

      },
      mainCatName: {
        width: width * .21,
        textAlign: "center",
        color: '#545252',
        fontSize: 14
      },
      /* MainCatBox - End */
      /* HomePage - Start */
      flexDirectionRow: {
        flexDirection: 'row'
      },
      allSectionStyle: {
        color: '#404040',
        fontSize: 14,
        marginTop: 5
      },

      HomePageCategoriesBoxContainer: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        backgroundColor: "#fff",

        justifyContent: 'center',
        padding: 10,
        paddingBottom: height * 0.03

      },
      HomePageProductTitleContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row', padding: 10,
      },
      HomePageProductTitle: {
        fontSize: 14, color: '#404040'
      },
      /* HomePage - End*/
      /* ProductBox-1 */
      ProductBoxContainer: {
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        overflow: "hidden",
        justifyContent: "flex-end",
        backgroundColor: "#fff",
        paddingBottom: 3,
        borderRadius: 5, marginBottom: 6
      },
      discountBar: {
        width: '100%', padding: 2,
        justifyContent: "center", backgroundColor: "#8DC73D",
        flexDirection: "row"
      },
      qtyContainer: {
        borderWidth: 1,
        borderColor: '#4AC1D8', backgroundColor: "#4EC4DB",
        paddingRight: 5, paddingLeft: 5, justifyContent: 'center',
        alignSelf: 'flex-start', margin: 5, borderRadius: 2,

      },
      qtyTextStyle: {
        textAlign: 'center', alignSelf: 'center',
        color: '#fff', fontSize: 9
      },
      discountText: {
        fontSize: 10,
        color: '#ffffff'
      },
      favBrandContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

      favIcon: {
        justifyContent: "center",
        alignSelf: 'flex-end', padding: 5
      },
      brandImage:
        { padding: 5, width: 40, height: 40 },
      productImageContainer: {
        alignItems: 'center', justifyContent: 'center'
      },
      productImage: {
        height: 100,
        alignSelf: "center",
        width: width * 0.37,
      },
      ProductBoxContainer2:
      {
        marginTop: 5,
        padding: 5,
        justifyContent: "center",
        backgroundColor: '#fff',
      },
      productNameText: { fontSize: 14, color: '#000000', padding: 5 },
      priceContainer: { flexDirection: 'row', padding: 5, },
      oldPriceText: {
        fontSize: 14, color: '#BCBCBC',
        textDecorationLine: 'line-through', marginTop: 2, marginRight: 5
      },
      priceTextBox: { fontSize: 16, color: '#000000', marginLeft: 5 },
      addToCartSmall: {
        alignSelf: "center", padding: 3,
        borderRadius: 5, width: '92%',
        backgroundColor: "#8DC73E",
      },
      addToCartText2: {
        color: '#fff', fontSize: 14,
        textAlign: "center"
      },

      padding4: { padding: 4, },
      qtyText: { fontSize: 14, color: '#272A3F', alignSelf: "center" },

      /* ProductBox-1 */
      /* ProductBox-2(Imagebackground and the title above it)-start */
      ImageBackgroundContainer: {
        overflow: 'hidden',
        // width: width * 0.58,
        height: height * 0.16,
        flexDirection: "column",
        justifyContent: "space-between",
        alignSelf: "center",
        margin: 5,
        marginTop: 2
      },
      ImageBackgroundLinearGradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',

      },
      ImageBackgroundTitle:
      {
        alignSelf: "center",
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        width: '100%',
        position: 'absolute',
        bottom: 0,

      },
      /* ProductBox-2(Imagebackground and the title above it)-End */
      /* HomePage(boxes) - Start */
      marginTop10: {
        marginTop: 10,
      },
      HomePageSliderContainer: {
        backgroundColor: "#fff",
        padding: 10
      },
      HomePageboxesStyle: {
        flexDirection: 'row', backgroundColor: '#fff',
        padding: 10
      },
      HomePageSliderStyle: {

        position: "absolute",

      },
      HomePageSliderTitle: {
        color: '#000000', fontSize: 16, marginTop: 5
      },
      HomePageSliderdescription:
      {
        color: '#7E7E7E', fontSize: 13, marginTop: 5
      },
      HomePageSliderBtContainer: {
        marginTop: 10, flexDirection: 'row',
        height: height * 0.044, backgroundColor: '#8DC73E',
        borderRadius: 5, justifyContent: "center",
        alignItems: "center", width: "40%", color: 'white',

      },

      paginationcontainerStyle: {
        bottom: 0, paddingTop: 10,
        paddingBottom: 10, paddingLeft: 0, paddingRight: 0
      },
      paginationDotStyle: {
        width: 10, height: 10,
        borderRadius: 5,
        backgroundColor: '#ffff', backgroundColor: "#2B2B2B"
      },
      paginationInactiveDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ffff', borderColor: '#2B2B2B',
        borderWidth: 1,
        backgroundColor: "#ffff"
      },
      /* HomePage(Slider)  - End */

      /* FooterBox - Start */
      fotterContent: {
        backgroundColor: '#1EB9E3',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        paddingTop: 11,

      },
      fotterStyle: {
        backgroundColor: '#1EB9E3',
        height: height * 0.07,
        alignSelf: 'flex-end',

      },
      /* FooterBox - End */
      /*productPage-start*/
      productPageImageContainer: {
        alignItems: 'center', justifyContent: 'center',
        marginTop: 20
      },
      productPageImageStyle: {
        height: 170,
        alignSelf: "center",
        width: '80%'
      },
      productPageContentStyle: {
        alignItems: 'center',
        justifyContent: 'center',

      },
      productPageTitle: {
        color: "#272A3F",
        fontSize: 25,
        textAlign: 'center'
      },
      productPageprice: {
        color: "#757575",
        fontSize: 16,
        textAlign: 'center'
      },
      productPageQtyContainerStyle: {
        alignItems: 'center', justifyContent: 'center',
        marginTop: 20
      },
      productPageQty: {
        color: "#99A0B0",
        fontSize: 16,
        textAlign: 'center'
      },
      productplusMinusConatiner: {
        // alignSelf: "center",
        width: '100%', backgroundColor: "#fff",
        justifyContent: 'space-around',
        flexDirection: 'row'
      },
      padding10: {
        padding: 10
      },
      qtyTextstyle: {
        color: "#272A3F",
        fontSize: 30,
        top: -1
      },
      /*qtyText-End*/

      /** DeliveryBox page */
      titleTxt: {
        marginTop: 15,
        fontSize: 22,
        color: '#000000',
        textAlign: "center"
      },
      descTxt: {
        marginTop: 15,
        fontSize: 16,
        color: '#7E7E7E',
        textAlign: "center"
      },
      descTxt2: {
        marginTop: 15,
        fontSize: 16,
        color: '#7E7E7E',
      },
      subscribeTxt: {
        fontSize: 18,
        color: '#fff',
        textAlign: "center"
      },
      subscribeBtn: {
        padding: 10,
        marginTop: height * 0.07,
        marginBottom: height * 0.07,
        backgroundColor: '#8DC73E',
        justifyContent: "center",
        alignItems: "center", color: 'white',

      },
      footerButton: { paddingLeft: '6%', paddingRight: '6%' },
      activeIcon: { borderBottomWidth: 2, borderBottomColor: '#fff' },
      textStyle: {
        fontSize: 18,
        color: "#A1A1A1",
       
      },
      textStyleFormBuilder: {
        fontSize: 16,
        color: "#A1A1A1"
      },
      /*GradientHeader */


      absolute: {
        position: "absolute",
        top: 0,
        zIndex: 6,
      },
      gradientHeader: {
        width: width,
        justifyContent:'center',
        // padding: width * 0.05,
        flexDirection: 'row',
      },
      InputContainer1: {
        marginLeft: '8%',
        flexDirection: "row",
        width: '84%',
        marginRight: '8%',
        borderWidth: 0.4,
        backgroundColor: '#fff',
        borderColor:'transparent'
      },
      container3: { flexDirection: 'row', width: '100%' },
      productNameBox: { width: '90%', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' },
      productNameTxt: { fontSize: 18, color: '#fff', top: -4 },
      backBtnStyle: { width: '10%', justifyContent: 'flex-end', alignItems: 'flex-end' },
      /*GradientHeader */
      /**DrawerContent */
      ScalingDrawerContainer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
      },
      menuLogo: { marginTop: height * .09, marginBottom: 15 },
      menuRow: { padding: 4, flexDirection: 'row', marginVertical: 10 },
      menuText: { marginLeft: 10, color: '#BAB8B8', fontSize: 16 },
      /**DrawerContent */
      // ConfirmationCode//
      dash: {
        width: 68,
        height: 54,
        borderBottomColor: '#DDDCDC',
        marginLeft: 8,
        borderBottomWidth: 1,
        color: '#636363',
        textAlign: "center",
        fontSize: 18,
        
        fontFamily: strings.FontFamilybold,
        // backgroundColor:'red',
      },
      dashFocus: {
        // backgroundColor:'red',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDCDC',
      },


      verificationContainerStyle: {
        marginTop: height * 0.04,
        alignItems: 'center'
      },
      resendCodeContainerStyle: {
        marginTop: height * 0.04,
        alignSelf: 'center',
        flexDirection: 'row'
      },
      verificationStyle:
      {
        fontSize: 18, color: '#636363'
      },
      resendCodeStyle:
      {
        fontSize: 14, color: '#6E7989', fontWeight: 'bold', paddingRight: 3, paddingTop: 2
      },
      marginTop7: {
        marginTop: 7
      },
      verficationTextInputStyle: {
        borderColor: 'white',
        flexDirection: IS_RTL ? 'row-reverse' : 'row',
        justifyContent: 'center', alignSelf: 'center',
        width: width * 0.66,
        // marginTop: height * 0.01
      },
      ConfirmBtContainer: {
        width: width * 0.3,
        alignSelf: "center", borderRadius: 5,
        marginTop: height * 0.05, 
        backgroundColor: '#8DC73D', flexDirection: "row",
        justifyContent: 'center'
      },
      resendBtContainer: {
        width: width * 0.3,
        alignSelf: "center", borderRadius: 5, 
        marginTop: height * 0.05,
       
        // backgroundColor: '#8DC73D',
        flexDirection: "row",
        justifyContent: 'center'
      },
      ConfirmBt: {
        color: '#FFFFFF', fontSize: 18,
        alignItems: 'center',
        lineHeight: 35
      },

      // EndConfirmationCode//
      // RecipesPage-Start//
      NamOfTheRecipeStyle: {
        fontSize: 20,
        color: '#1D1D1D',

      },
      ShortDescriptionRecipeStyle: {
        fontSize: 13,
        color: '#424043',
        lineHeight: 22
      },
      cardText: {
        fontSize: 14,
        color: '#313131',
        lineHeight: 22
      },
      ingredientsContainer: {
        marginTop: height * 0.05,
        backgroundColor: '#F3F3F3'
      },
      ingredientsTitleContainerStyle: {
        flexDirection: 'row',
        marginTop: height * 0.02,
        paddingHorizontal: 10
      },
      plusMinusConatiner: {
        alignSelf: "center",
        borderRadius: 5, width: '92%', backgroundColor: "#fff",
        borderColor: '#8DC73E',
        borderWidth: 1, justifyContent: 'space-around',
        flexDirection: 'row'
      },
      // RecipesPage-End//
      // ScheduleOrderBox-start//
      ScheduleOrderBoxContainer: {
        marginTop: 5, alignSelf: "center",
        flexDirection: 'column', width: '100%',
        borderBottomColor: '#DEDEDE', borderBottomWidth: 1,
        paddingBottom: 10, marginBottom: 10
      },
      ScheduleOrderBoxContent: {
        width: '100%', flexDirection: 'row'
      },
      ScheduleOrderBoxImageContainer: {
        width: '40%',
        height: width * 0.24,

      },
      ScheduleOrderBoxImage: {
        width: width * 0.2,
        height: width * 0.2
      },
      ScheduleOrderBoxDescription:
      {
        width: '60%', justifyContent: "space-between", flexDirection: 'row'
      },
      ScheduleOrderBoxTitle: {
        color: '#6E7989',
        fontSize: 12
      },
      SaveBTN: {
        backgroundColor: '#8DC73D',

        textAlign: 'center',
      },
      NoBTN: {
        backgroundColor: '#fff',
        borderColor: '#8DC73D',
        borderWidth: 1,


        textAlign: 'center',
      },
      // ScheduleOrderBox-End//
      /**ItemsBox */

      rowDir: {
        flexDirection: "row",
      },
      spaceBetween: {
        justifyContent: 'space-between'
      },
      itemName: {
        fontSize: 12,
        color: "#6E7989"
      },
      qtyTxt: {
        // textAlign: 'center',
        fontSize: 14,
        color: "#000000"
      },
      mainImage2: {
        width: width * .18, height: width * .18

      },
      bottomBorder: {
        paddingVertical: 10,

        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
      },
      plusMinusConatiner2: {
        alignSelf: "center",
        width: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
      },
      /**ItemsBox */

      /** addrder page */
      whiteBox: {
        marginTop: 5,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        padding: 10,
      },
      dateTxt: {
        // alignSelf:'center',
        color: '#000000',
        fontSize: 14
      },
      blueBorder: {
        borderLeftWidth: 6,
        borderLeftColor: '#4EC4DB'
      },
      calenderItemTxt: {
        fontSize: 14,
        color: "#271D1D"
      },
      /** addrder page */

      //MyAccountPage-Start//
      MyAccountImageBackgroundStyle: {
        width: width,
        //  height: height * 0.28
      },
      MyAccountImageBackgroundTitle: {
        fontSize: 18,
        color: '#fff'
      },
      ImageBackgroundMyAccountEmail: {
        fontSize: 14,
        color: '#fff'
      },
      MyAccountImageBackgroundContainer: {
        marginHorizontal: 15, marginVertical: 15
      },
      MyAccountBtContainer: {
        width: '80%', borderRadius: 5,
        marginTop: height * 0.02,
        backgroundColor: '#0F728D',
        flexDirection: "row",
        alignSelf: 'center',
        marginBottom: height * 0.01,
        justifyContent: 'center'
      },
      MyAccountBt:
      {
        color: '#FFFFFF', fontSize: 18,
        alignItems: 'center', lineHeight: 32
      },
      paddingHorizontal4: {
        paddingHorizontal: '4%'
      },
      //MyAccountPage-End//
      //  PersonalinformationBox
      PersonalinformationPageMainContainer: {
        marginTop: height * .03, justifyContent: 'space-between',
        flexDirection: "row"
      },
      PersonalinformationPageMainContent: {
        fontSize: 16, color: '#404040'
      },
      updateInformationModalContainer: {
        position: "absolute",
        right: -8,
        top: -8,
        zIndex: 8

      },
      socialOptionStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
        flexDirection: 'row',
        width: '100%',
        // height: 1.2,
        // backgroundColor: "#BEBEBE"
        borderBottomWidth: 1,
        borderBottomColor: '#BEBEBE'
      },
      socialOptionText: {
        position: 'absolute',
        // zIndex:5,
        top: -15,
        padding: 5, paddingTop: 3,
        backgroundColor: "#fff",
        color: '#606060',
        fontSize: 13
      },

      // MyAccountPagesStyle

      HelpCenterPageBackground: {
        backgroundColor: '#fff'
      },
      HelpCenterPageContainer: {
        marginHorizontal: 15, marginVertical: 15
      },
      HelpCenterPageContactusSection: {
        justifyContent: 'center', alignItems: 'center', marginTop: height * 0.05,
      },
      HelpCenterBoxContaier: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
      },
      flexDirectionRow: {
        flexDirection: 'row'
      },
      HelpCenterBoxImageContainer: {
        backgroundColor: '#92D13D', padding: 7, justifyContent: "center",
        borderRadius: 5, marginRight: 8, width: 35, height: 35
      },
      HelpCenterBoxImage: {
        width: 18, height: 18,
        justifyContent: 'center', alignSelf: 'center'
      },
      HelpCenterBoxTitle: {
        color: '#000000', fontSize: 16,
      },

      // MyAccountModalStyle//
      MyAccountModalContainer: {
        borderRadius: 5, backgroundColor: '#fff'

      },
      MyAccountModalContent: {
        marginHorizontal: 18, marginVertical: 15
      },
      MyAccountModalContentTitle: {
        fontSize: 20, color: '#000000'
      },
      MyAccountModalContentLocation: {
        color: '#545454',
        fontSize: 16
      },
      // MyAccountModalStyle//
      // OrdersPageStyle-start//

      previousOrderTitle: {
        fontSize: 16,
        color: '#433F3F'
      },
      /**Orders */
      titleText5: { color: '#000000', fontSize: 14 },
      titleText6: { color: '#B4B4B4', fontSize: 12 },
      ordersList: {
        justifyContent: "space-between",
        padding: '4%',
        borderBottomWidth: 1,
        borderBottomColor: "#DBDBDB",
        flexDirection: "row",
      },

      /**Orders */
      // LangugesModal-Start
      title1: {
        fontSize: 18, color: '#313131'
      },
      LangugesModalActionContainer: {
        borderTopColor: '#DEDEDE', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-around',
        padding: 0, width: '100%'
      },

      DONEbtContainer: {
        justifyContent: 'center', alignSelf: 'center', alignItems: 'center', paddingTop: 10,
        paddingBottom: 10, width: "50%"
      },
      DONEbtText: {
        color: '#8DC73D', fontSize: 16, textAlign: 'center'
      },
      CancelbtContainer: {
        borderLeftColor: '#DEDEDE', borderLeftWidth: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', paddingTop: 10,
        paddingBottom: 10, width: "50%"
      },
      CancelbtText: {
        color: '#AAAAAA', fontSize: 16, textAlign: 'center'
      },

      // LangugesModal-Start


      /**Calneder Modal */
      ModalContainer: {
        // marginTop: 25,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 20,
        bottom: 0,
        // alignSelf:"center"
      },
      cancelBtn: {
        // position: "absolute",
        marginBottom: -15,
        marginLeft: -8,
        // top: -8,
        zIndex: 8,
        overflow: "visible"
      },
      greenModalBtn: {
        padding: 3,
        borderRadius: 7,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#8DC73E',
        justifyContent: "center",
        alignItems: "center", color: 'white',

      },
      greenBorderModalBtn: {
        padding: 3,
        borderRadius: 7,
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 1,
        borderColor: "#8DC73E",
        backgroundColor: '#ffff',
        justifyContent: "center",
        alignItems: "center", color: 'white',

      },
      geentTxt: {
        fontSize: 18,
        color: '#8DC73E',
        textAlign: "center"
      },
      /**Calneder Modal */

      /**Week oreder */

      grayBox: {
        marginTop: 5,
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        padding: 10,
      },
      dateTxt2: {
        color: "#8DC73D",
        fontSize: 13,
      },
      /**Week oreder */
      previousOrderTitle: {
        fontSize: 16,
        color: '#433F3F'
      },
      /**Orders */
      titleText5: { color: '#000000', fontSize: 14 },
      titleText6: { color: '#B4B4B4', fontSize: 12 },
      ordersList: {
        justifyContent: "space-between",
        padding: '4%',
        borderBottomWidth: 1,
        borderBottomColor: "#DBDBDB",
        flexDirection: "row",
      },

      /**Orders */
      // LangugesModal-Start
      title1: {
        fontSize: 18, color: '#313131'
      },
      LangugesModalActionContainer: {
        borderTopColor: '#DEDEDE', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-around',
        padding: 0, width: '100%'
      },

      DONEbtContainer: {
        justifyContent: 'center', alignSelf: 'center', alignItems: 'center', paddingTop: 10,
        paddingBottom: 10, width: "50%"
      },
      DONEbtText: {
        color: '#8DC73D', fontSize: 16, textAlign: 'center'
      },
      CancelbtContainer: {
        borderLeftColor: '#DEDEDE', borderLeftWidth: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', paddingTop: 10,
        paddingBottom: 10, width: "50%"
      },
      CancelbtText: {
        color: '#AAAAAA', fontSize: 16, textAlign: 'center'
      },

      // LangugesModal-Start


      /**Calneder Modal */
      ModalContainer: {
        // marginTop: 25,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 20,
        bottom: 0,
        // alignSelf:"center"
      },
      cancelBtn: {
        // position: "absolute",
        marginBottom: -15,
        marginLeft: -8,
        // top: -8,
        zIndex: 8,
        overflow: "visible"
      },
      greenModalBtn: {
        padding: 3,
        borderRadius: 7,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#8DC73E',
        justifyContent: "center",
        alignItems: "center", color: 'white',

      },
      greenBorderModalBtn: {
        padding: 3,
        borderRadius: 7,
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 1,
        borderColor: "#8DC73E",
        backgroundColor: '#ffff',
        justifyContent: "center",
        alignItems: "center", color: 'white',

      },
      geentTxt: {
        fontSize: 18,
        color: '#8DC73E',
        textAlign: "center"
      },
      /**Calneder Modal */
      // AddOrderPage-start
    
      NoteRowStyle: {
        borderBottomColor: '#B4B1B1',
        borderBottomWidth: 1,
        flexDirection: 'row',
        width: '95%',
        marginRight: 5, marginLeft: 5

      },
      Textareastyle: {
        textAlign: IS_RTL ? 'right' : 'left',
        borderColor: 'transparent', borderWidth: 0,
        backgroundColor: 'white', fontSize: 12,
        // paddingLeft: 12 ,
        color: '#757575'
      },

      sendOrderBT: {
        padding: 3,
        borderRadius: 5, width: '40%',
        backgroundColor: "#8DC73E", marginTop: 15, marginBottom: 15

      },
      ModalContainer: {
        borderRadius: 5,
        //  padding: 10,
        backgroundColor: '#fff'
      },

      /*SuccessfulModal-start*/
      SuccessfulContainer: {
        flex: 1, alignItems: "center", justifyContent: "center",
      },
      SuccessfulDescription: {
        color: '#000000', fontSize: 16,
      },
      SuccessfulMargin: {
        marginBottom: 10, marginTop: 10
      },
      SuccessfulBTStyle: {
        backgroundColor: '#8DC73D',
        width: '60%',
        alignSelf: "center",
        justifyContent: "center",
        alignItems: 'center',
        alignContent:'center',
        height: 40,
        borderRadius: 10,
        marginVertical: 10
      },
      SuccessfulBtText: {
        color: 'white', fontSize: 20,
        paddingBottom:4,
      },


      //AddOrderPage-end

      /**CalenderItemBox */

      underLine: { width: '94%', alignSelf: 'center', height: 1, backgroundColor: '#D6D6D6' },
      /**CalenderItemBox */

      /**MyAccountList */
      container4: { marginHorizontal: 15, marginBottom: 10 },


      /**MyAccountList */
      /** Wallet */
      container5: {

      },
      marginRight7: {
        marginRight: 12
      },
      chargeBtn: {
        paddingHorizontal: 8,
        color: "#fff",
        fontSize: 13
      },
      padding20: {
        padding: 20
      },

      /** Wallet */

      /**charge wallet form */
      radioBtnStyle: {
        flexDirection: "row",
        marginVertical: '4%',
        marginRight: '4%',
        backgroundColor: '#8DC73E', width: '80%',
        alignSelf: "center", justifyContent: "center",
        alignItems: 'center',
        height: 35, borderRadius: 8, marginVertical: 10
      },
      SuccessfulBtText: {
        color: 'white', fontSize: 18, textAlign: 'center'
      },
      searchInput: {
        width: "85%",
        padding: 0,
        fontSize: 13,
        color: "black",
        textAlign: IS_RTL ? 'right' : 'left',
        paddingLeft: 5

      },
      InputContainer: {
        marginRight: '8%',
        flexDirection: "row",
        width: '85%',
        borderWidth: 0.8,
        backgroundColor: 'white'
        , justifyContent: 'flex-start', alignItems: 'flex-start',
        borderColor: "#000000",

      },
      radioBtn: { marginRight: 10, justifyContent: "center", borderRadius: 40, width: 20, height: 20, borderWidth: 1, borderColor: "#8DC73D" },

      radioSelect: { alignSelf: "center", borderRadius: 40, width: 13, height: 13 },
      titleText3: { color: '#000000', fontSize: 16 },

      /**charge wallet form */
      //AddOrderPage-end
      /*Filter Modal-start*/
      FilterModalContainer1:{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flex: 1,
        flexDirection: 'column',
    },
    FilterModalContainer2:{
      // borderWidth: 2,
      padding: 10,
      backgroundColor: '#fff',
      borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
      width: width,
      maxHeight: height * 0.8,
     
    },

    trackStyle: {
      backgroundColor: "#4EC4DB",
      height: width * 0.01,
      borderRadius: 7
    },
    markerStyle: {
      height: 15,
      width: 15,
      marginTop: 3,
      borderRadius: 20,
      backgroundColor: '#4EC4DB',
      borderWidth: 0.5,
      borderColor: '#4EC4DB',
    },
    pressedMarkerStyle: {
      backgroundColor: '#4EC4DB',
    },
    selectedStyle: {
      backgroundColor: '#4EC4DB'
    },
      /*Filiter Modal-End*/
    });




    return styles;
  }
}
