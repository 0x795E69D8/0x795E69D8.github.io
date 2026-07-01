/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LogLevel } from '@framework/live2dcubismframework';
import { ModelNameOverrides, normalizeModelId } from './modelnames';

/**
 * Sample Appで使用する定数
 */

// Canvas width and height pixel values, or dynamic screen size ('auto').
export const CanvasSize: { width: number; height: number } | 'auto' = 'auto';

// キャンバスの数
export const CanvasNum = 0;

// 画面
export const ViewScale = 1.0;
export const ViewMaxScale = 3.0;
export const ViewMinScale = 0.8;

export const ViewLogicalLeft = -1.0;
export const ViewLogicalRight = 1.0;
export const ViewLogicalBottom = -1.0;
export const ViewLogicalTop = 1.0;

export const ViewLogicalMaxLeft = -2.0;
export const ViewLogicalMaxRight = 2.0;
export const ViewLogicalMaxBottom = -2.0;
export const ViewLogicalMaxTop = 2.0;

// 相対パス
export const ResourcesPath = '../Resources/';

// モデルの後ろにある背景の画像ファイル
export const BackImageName = 'back_class_normal.png';

// 歯車
export const GearImageName = 'icon_gear.png';

// 終了ボタン
export const PowerImageName = 'CloseNormal.png';

export const BgPath = ResourcesPath + 'backgrounds/';
export const BgFileExt = '.png';

// モデル定義---------------------------------------------
// モデルを配置したディレクトリ名の配列
// ディレクトリ名とmodel3.jsonの名前を一致させておくこと
export const ModelDir_GFL2: string[] = [
    "CHA_6P62_BOSS_01",
    "CHA_6P62_xinyuanguaidao_01",
    "CHA_Acicular_Meta_01",
    "CHA_Acicular_NPC_01",
    "CHA_Ada_01",
    "CHA_AdultWorker_01",
    "CHA_Agatha_01",
    "CHA_AK12_NPC_01",
    "CHA_AK12_NPC_SP",
    "CHA_Alf_SSR_01",
    "CHA_Alva_Suit_01",
    "CHA_Aminda_NPC_01",
    "CHA_Andoris_SSR_01",
    "CHA_Ange_NPC_01",
    "CHA_Ange_NPC_SP",
    "CHA_Ange_Suit_01",
    "CHA_Ankyrie_01",
    "CHA_Ankyrie_01_Tactical",
    "CHA_Anonymous_01",
    "CHA_AnshangQ_NPC_01",
    "CHA_ArmedFemale01_01",
    "CHA_ArmedMale01_01",
    "CHA_Basti_01",
    "CHA_Bathilda_NPC_01",
    "CHA_Bathilda_SSR_01",
    "CHA_Beelneith_NPC_01",
    "CHA_Bellis_01",
    "CHA_Bereifel_NPC_01",
    "CHA_Berser_NPC_01",
    "CHA_Bibi_NPC_01",
    "CHA_Bibi_NPC_02",
    "CHA_Bibi_NPC_03",
    "CHA_Biyoca_SSR_01",
    "CHA_BlackGroza_NPC_01",
    "CHA_Blackmountain_01",
    "CHA_Blusphere_NPC_01",
    "CHA_Blusphere_NPC_02",
    "CHA_Bowen_NPC_01",
    "CHA_Caldwell_01",
    "CHA_Caldwell_Suit_Protection_01",
    "CHA_Caldwell_Teacher_01",
    "CHA_CaptainKellen_NPC_01",
    "CHA_CaptainKellen_NPC_02",
    "CHA_CaptainKellen_NPC_03",
    "CHA_CaptainKellen_NPC_04",
    "CHA_Carmen_NPC_01",
    "CHA_CensorLeo_NPC_01",
    "CHA_Centaureissi_SSR_01",
    "CHA_Charolic_Mask_01",
    "CHA_Charolic_Paradeus_01",
    "CHA_Charolic_Rest_01",
    "CHA_Charolic_SR_01",
    "CHA_Charolic_SSR_01",
    "CHA_Cheeta_SR_01",
    "CHA_Cheyanne_01",
    "CHA_Cheyanne_02",
    "CHA_Cheyanne_03",
    "CHA_Chiloveig_NPC_01",
    "CHA_Chiloveig_NPC_02",
    "CHA_Cloak_Losses_01",
    "CHA_Clukay_SSR_01",
    "CHA_Cocoon_NPC_01",
    "CHA_Cocoon_Suit_levelup_01",
    "CHA_Colphne_N_01",
    "CHA_Colphne_Paradeus_01",
    "CHA_Colphne_Rest_01",
    "CHA_Colphne_SR_01",
    "CHA_Commander1_01",
    "CHA_Commander1_02",
    "CHA_Commander2_01",
    "CHA_Commander2_02",
    "CHA_Consignor_NPC_01",
    "CHA_Crifium_NPC_01",
    "CHA_Daiyan_SSR_01",
    "CHA_Dandelion_NPC_01",
    "CHA_Dandelion_NPC_02",
    "CHA_Dandely_Lose_01",
    "CHA_Darcular_NPC_01",
    "CHA_Daria_NPC_01",
    "CHA_Darture_Losses_01",
    "CHA_Davey_NPC_01",
    "CHA_Deele_NPC_01",
    "CHA_Delilah_01",
    "CHA_Dmitriy_NPC_01",
    "CHA_Dmitriy_Young_NPC",
    "CHA_Drachen_NPC_01",
    "CHA_Dragon_01",
    "CHA_Dragon_02",
    "CHA_Dusevnyj_SSR_01",
    "CHA_Dusevnyj_Suit_01",
    "CHA_ELID_01",
    "CHA_Elnida_NPC_01",
    "CHA_EngineerA_NPC_01",
    "CHA_Esther_NPC_01",
    "CHA_FacilitatorC_NPC_01",
    "CHA_FacilitatorC_NPC_02",
    "CHA_FacilitatorC_NPC_03",
    "CHA_Fadei_NPC_01",
    "CHA_Farkas_NPC_01",
    "CHA_FatOfficial1_01",
    "CHA_Faye_SSR_01",
    "CHA_FemaleCouriers_NPC_01",
    "CHA_Flagg_NPC_01",
    "CHA_Florence_SSR_01",
    "CHA_Friday_01",
    "CHA_Friday_SuitBroken_01",
    "CHA_Friday_SuitBroken_02",
    "CHA_Friday_SuitOpen eyes_01",
    "CHA_Fuchin_01",
    "CHA_G11_Suit_MaidUniform",
    "CHA_G41_01",
    "CHA_Gaia_NPC_01",
    "CHA_Green_NormalBoy01_NPC_01",
    "CHA_Green_NormalFemale01_NPC_01",
    "CHA_Green_NormalGirl01_NPC_01",
    "CHA_Green_NormalMale01_NPC_01",
    "CHA_Green_OldNormalFemale01_01",
    "CHA_Green_OldNormalMale01_01",
    "CHA_Green_OldRichFemale01_01",
    "CHA_Green_OldRichMale01_01",
    "CHA_Green_RichBoy01_NPC_01",
    "CHA_Green_RichFemale01_NPC_01",
    "CHA_Green_RichGirl01_NPC_01",
    "CHA_Green_RichMale01_NPC_01",
    "CHA_Griffin_NPC_01",
    "CHA_Groza_Losses_01",
    "CHA_Groza_Mask_01",
    "CHA_Groza_Paradeus_01",
    "CHA_Groza_R_01",
    "CHA_Groza_Rest_01",
    "CHA_Groza_SR_01",
    "CHA_Groza_Suit_Dress_01",
    "CHA_Harpsy_SSR_01",
    "CHA_Havier_NPC_01",
    "CHA_Helen_SSR_01",
    "CHA_Helen_SSR_02",
    "CHA_Helen_Suit_01",
    "CHA_Helen_Suit_02",
    "CHA_Helen_Suit_03",
    "CHA_Helena_NPC_01",
    "CHA_Helena_NPC_02",
    "CHA_Helena_NPC_03",
    "CHA_Helena_Paradeus_01",
    "CHA_Heli_NPC_01",
    "CHA_Helianthus_NPC_01",
    "CHA_Hunter_01",
    "CHA_Idestam_01",
    "CHA_Inessa_NPC_01",
    "CHA_Inspector_NPC_01",
    "CHA_Isha_NPC_01",
    "CHA_IsomerN_01",
    "CHA_Ivan_NPC_01",
    "CHA_Jiangyu_SSR_01",
    "CHA_Kalina_NPC_01",
    "CHA_Kalina_NPC_01_OLD",
    "CHA_Kalina_Suit_01",
    "CHA_Kalina_Suit_Daily_01",
    "CHA_Kalina_Suit_InvesGroup_01",
    "CHA_kano_01",
    "CHA_Karl_NPC_01",
    "CHA_Koleda_01",
    "CHA_Koleda_NPC_SP",
    "CHA_Konny_NPC_01",
    "CHA_Koshmar_NPC_01",
    "CHA_Krasso_01",
    "CHA_Kryuger_NPC_01",
    "CHA_Ksenia_SR_01",
    "CHA_Kuro_01",
    "CHA_Laibnis_NPC_01",
    "CHA_Laibnis_Suit_InvesGroup_01",
    "CHA_Lampetia_NPC_01",
    "CHA_Lene_SSR_01",
    "CHA_Lene_SSR_01_OLD",
    "CHA_Lene_Suit_ump40_01",
    "CHA_Lenna_SSR_01",
    "CHA_Lenna_SSR_02",
    "CHA_Lenna_Suit_01",
    "CHA_Lenten_NPC_01",
    "CHA_Lenten_NPC_02",
    "CHA_Lenten_Suit_Protection_01",
    "CHA_Levva_NPC_01",
    "CHA_Levva_NPC_01_OLD",
    "CHA_Levva_SSR_01",
    "CHA_Levva_Suit_ump45_01",
    "CHA_Levva_Suit_ump45_02",
    "CHA_Lewis_SSR_01",
    "CHA_Liaison_NPC_01",
    "CHA_Liberty_01",
    "CHA_Liberty_02",
    "CHA_Lieutenant_NPC_01",
    "CHA_Lind_SSR_01",
    "CHA_Lisa_01",
    "CHA_Littara_SR_01",
    "CHA_Liushi_01",
    "CHA_Lonnie_NPC_01",
    "CHA_Lorelei_SSR_01",
    "CHA_Lorelei_SSR_02",
    "CHA_Loring_NPC_01",
    "CHA_Lotta_SR_01",
    "CHA_Lumi_NPC_01",
    "CHA_Lydia_01",
    "CHA_M16_01",
    "CHA_Macqiato_SSR_01",
    "CHA_Macqiato_SSR_02",
    "CHA_MaleCouriers_NPC_01",
    "CHA_MaleVeteran01_01",
    "CHA_manager_NPC_01",
    "CHA_ManagerB_NPC_01",
    "CHA_ManagerB_NPC_02",
    "CHA_MangiEmployee_NPC_01",
    "CHA_MangiKnellA_NPC_01",
    "CHA_MangiKnellB_NPC_01",
    "CHA_MangiKnellC_NPC_01",
    "CHA_MangiKnellD_NPC_01",
    "CHA_MAwomen_NPC_01",
    "CHA_Mayling_NPC_01",
    "CHA_Mechelin_01",
    "CHA_Mechty_SSR_01",
    "CHA_MedicalFemale01_01",
    "CHA_MedicalMale01_01",
    "CHA_Medquinn_01",
    "CHA_Medquinn_Suit_daily_02",
    "CHA_Medquinn_Suit_daily_03",
    "CHA_Misia_NPC_01",
    "CHA_Mityl_01",
    "CHA_Mopro1.5_NPC_01",
    "CHA_Mosinnagant_SSR_01",
    "CHA_MysteryMan_NPC_01",
    "CHA_MysteryMan_NPC_02",
    "CHA_MysteryWoman_NPC_01",
    "CHA_Nagant_SR_01",
    "CHA_Narcissus_01",
    "CHA_Nele_01",
    "CHA_Nemesis_Gnosis_01",
    "CHA_Nemesis_Human_01",
    "CHA_Nemesis_Paradeus_01",
    "CHA_Nemesis_R_01",
    "CHA_Nemesis_Rest_01",
    "CHA_Nemesis_SR_01",
    "CHA_Nikita_SSR_01",
    "CHA_Nikolay_NPC_01",
    "CHA_Niter_NPC_01",
    "CHA_NobleGuardian_01",
    "CHA_Nyto_NPC_01",
    "CHA_Olek_NPC_01",
    "CHA_Orpheoreon_Kid_01",
    "CHA_Orpheoreon_NPC_01",
    "CHA_Orpheoreon_NPC_02",
    "CHA_Orphina_NPC_01",
    "CHA_OTs-14_01",
    "CHA_OTs-14_02",
    "CHA_OTs-14_NPC_SP",
    "CHA_OTs-14_Wedding_01",
    "CHA_Papasha_SSR_01",
    "CHA_Pavel_01",
    "CHA_Pavel_NPC_01",
    "CHA_Pegaso_01",
    "CHA_Peri_SSR_01",
    "CHA_Peritya_SSR_01",
    "CHA_Persicaria_NPC_01",
    "CHA_PersicariaDoll_NPC_01",
    "CHA_Phaetusa_SSR_01",
    "CHA_PMCFemale01_01",
    "CHA_PMCMale01_01",
    "CHA_Poludnitsa_NPC_01",
    "CHA_Pose_01",
    "CHA_predecessor_NPC_01",
    "CHA_PSAFemale_02",
    "CHA_PSAFemale_03",
    "CHA_PSAMale_03",
    "CHA_PSAMale01_01",
    "CHA_Qiongjiu_SSR_01",
    "CHA_Qiuhua_SSR_01",
    "CHA_RegularDoll_NPC_01",
    "CHA_Researcher_01",
    "CHA_Researcher_02",
    "CHA_RNDmale_NPC_01",
    "CHA_RNDmale_NPC_02",
    "CHA_Robella_SSR_01",
    "CHA_Robella_Suit_GriffinUniform_01",
    "CHA_Rosaline_NPC_01",
    "CHA_RPK-16_NPC_01",
    "CHA_RPK16_NPC_SP",
    "CHA_Ruchey_SSR_01",
    "CHA_Rurik_NPC_01",
    "CHA_Sabrina_SSR_01",
    "CHA_Saga_NPC_01",
    "CHA_Sakura_NPC_01",
    "CHA_Sakura_SSR_01",
    "CHA_Seele_NPC_01",
    "CHA_Sexdwarf_NPC_01",
    "CHA_Sexdwarf_Paradeus_01",
    "CHA_Sextans_01",
    "CHA_Shadowless_01",
    "CHA_Sharkry_SR_01",
    "CHA_Sharkry_SSR_01",
    "CHA_Sia_NPC_01",
    "CHA_Sloane_01",
    "CHA_Snavel_01",
    "CHA_Soldier01_NPC_01",
    "CHA_Soldier01_NPC_02",
    "CHA_SoliderFemale_01",
    "CHA_SoliderMale_01",
    "CHA_Sop_NPC_01",
    "CHA_SopModJr_01",
    "CHA_Soppo_02",
    "CHA_Soppo_GriffinUniform_01",
    "CHA_SpecialAgentFemale01_01",
    "CHA_SpecialAgentMale01_01",
    "CHA_Springfield_NPC_01",
    "CHA_Springfield_NPC_SP",
    "CHA_Springfield_SSR_01",
    "CHA_Starvoid_01",
    "CHA_Starvoid_02",
    "CHA_Strauss_01",
    "CHA_Suomi_Mask_01",
    "CHA_Suomi_Rest_01",
    "CHA_Suomi_SSR_01",
    "CHA_Sweeper_NPC_01",
    "CHA_Tololo_SSR_01",
    "CHA_Type56-1_01",
    "CHA_U_NPC_SP",
    "CHA_Ullrid_Mask_01",
    "CHA_Ullrid_SSR_01",
    "CHA_Unitas_NPC_01",
    "CHA_Unitas_NPC_02",
    "CHA_UnsearchableGirl_NPC_01",
    "CHA_URNCofficer_NPC_01",
    "CHA_Ussery_NPC_01",
    "CHA_V3_01",
    "CHA_Vector_SSR_01",
    "CHA_Vepley_Paradeus_01",
    "CHA_Vepley_Rest_01",
    "CHA_Vepley_SR_01",
    "CHA_Vepley_SSR_01",
    "CHA_Vera_01",
    "CHA_Vladimir_NPC_01",
    "CHA_Voymastina_SSR_01",
    "CHA_Voymastina_SSR_02",
    "CHA_Welrod_SSR_01",
    "CHA_WildHunt__01",
    "CHA_WomanA_NPC_01",
    "CHA_Yakov_NPC_01",
    "CHA_Yellow_FemaleWorker_01",
    "CHA_Yellow_GuardFemale_01",
    "CHA_Yellow_GuardMale_01",
    "CHA_Yellow_NormalBoy01_NPC_01",
    "CHA_Yellow_NormalFemale01_NPC_01",
    "CHA_Yellow_NormalGirl01_NPC_01",
    "CHA_Yellow_NormalMale01_NPC_01",
    "CHA_Yellow_OldNormalFemale01_01",
    "CHA_Yellow_OldNormalMale01_01",
    "CHA_Yoohee_SSR_01",
    "CHA_YoungWorker_01",
    "CHA_Zhaohui_SSR_01",
    "CHA_Zimmermann_NPC_01",
    "CHA_Zimmermann_NPC_02",
    "greencat",
];

export const BgNames_GFL2: string[] = [
    "BG_Green_404Corridor_Day_01",
    "BG_Green_404Room_Day_01",
    "BG_Green_404Room_Day_02",
    "BG_Green_AirForceBase_01",
    "BG_Green_Amusementpark_Day_01",
    "BG_Green_Amusementpark_Day_02",
    "BG_Green_Amusementpark_Night_02",
    "BG_Green_Bridge_Day_01",
    "BG_Green_Bridge_Enter_Day_01",
    "BG_Green_Bridge_Night_01",
    "BG_Green_Building_Night_01",
    "BG_Green_Building_Night_02",
    "BG_Green_Checkpoint_Day_02",
    "BG_Green_City_Business_Day_01",
    "BG_Green_City_Business_Night_01",
    "BG_Green_City_Day_01",
    "BG_Green_City_Day_02",
    "BG_Green_City_Night_01",
    "BG_Green_City_Night_02",
    "BG_Green_City_Night_03",
    "BG_Green_City_Residential_Day_01",
    "BG_Green_City_Residential_Night_01",
    "BG_Green_City_Street_Day_01",
    "BG_Green_City_Street_Day_02",
    "BG_Green_City_Street_Night_01",
    "BG_Green_ConsultingRoom_Night_01",
    "BG_Green_Deck_Night_01",
    "BG_Green_DisuseBuild_Day_01",
    "BG_Green_DisuseBuild_Day_02",
    "BG_Green_DollsDorm_Day_01",
    "BG_Green_Grifon_Corridor_Day_01",
    "BG_Green_Grifon_Corridor_Day_02",
    "BG_Green_Grifon_Corridor_Dusk_01",
    "BG_Green_Grifon_Corridor_Night_01",
    "BG_Green_Grifon_Corridor_Night_02",
    "BG_Green_Grifon_Day_01",
    "BG_Green_Grifon_Dusk_01",
    "BG_Green_Grifon_Night_01",
    "BG_Green_Hotellobby_Day_01",
    "BG_Green_Hotelmonitoring_Day_01",
    "BG_Green_Hotelpool_Day_01",
    "BG_Green_Hotelpool_Night_01",
    "BG_Green_Hotelrestaurant_Day_01",
    "BG_Green_Hotelrestaurant_Night_01",
    "BG_Green_Hotelroom_Day_01",
    "BG_Green_Hotelwarehouse_Day_01",
    "BG_Green_Institute_01",
    "BG_Green_Institute_02",
    "BG_Green_Institute_03",
    "BG_Green_Lake_Day_01",
    "BG_Green_MangiCorridor_Nignt_01",
    "BG_Green_MechanicalLab_Day_01",
    "BG_Green_MechanicalLab_Night_01",
    "BG_Green_Office_Day_01",
    "BG_Green_Port_Night_01",
    "BG_Green_Railway_Carriage_Day_01",
    "BG_Green_Room_Day_01",
    "BG_Green_Room_Day_02",
    "BG_Green_Room_Night_02",
    "BG_Green_ServerRoom_Night_01",
    "BG_Green_ServerRoom_Night_02",
    "BG_Green_ServerRoom_Night_03",
    "BG_Green_ServerRoom_Night_04",
    "BG_Green_Sewage_Day_01",
    "BG_Green_Sewer_Night_01",
    "BG_Green_Shop_01",
    "BG_Green_Stage_Day_01",
    "BG_Green_Stage_Night_01",
    "BG_Green_Station_Day_01",
    "BG_Green_Station_Day_02",
    "BG_Green_Station_Night_01",
    "BG_Green_Suburbs_Day_01",
    "BG_Green_Suburbs_Day_02",
    "BG_Green_TempHospital_Day_01",
    "BG_Green_UndergroundLab_Night_01",
    "BG_Green_UndergroundLab_Night_02",
    "BG_Green_Warehouse_Day_01",
    "BG_Green_Warehousearea_Day_01",
    "BG_Green_WastedVilla_Night_01",
    "BG_Green_WastedVillaGarden_Night_01",
    "BG_Green_Workshop_Night_01",
    "BG_Green_ZuccheroCafe_Bar_Day_01",
    "BG_Green_ZuccheroCafe_Bar_Night_01",
    "BG_Green_ZuccheroCafe_Day_01",
    "BG_Green_ZuccheroCafe_Day_02",
    "BG_Green_ZuccheroCafe_Kitchen_Day_01",
    "BG_Green_ZuccheroCafe_Kitchen_Night_01",
    "BG_Green_ZuccheroCafe_Night_01",
    "BG_Green_ZuccheroCafe_Night_02",
    "BG_Green_ZuccheroCafe_Table_Day_01",
    "BG_Green_ZuccheroCafe_Window_Day_01",
    "BG_Green_ZuccheroCafe_Window_Night_01",
    "BG_NeuralCloud_BreakWall_01",
    "BG_NeuralCloud_Burbank_01",
    "BG_NeuralCloud_Cyclopes_01",
    "BG_NeuralCloud_CyclopesMonument_01",
    "BG_NeuralCloud_DataBlackHole_01",
    "BG_NeuralCloud_DataTunnel_01",
    "BG_NeuralCloud_Oasis_01",
    "BG_NeuralCloud_OasisCenter_01",
    "BG_NeuralCloud_OasisRuin_01",
    "BG_NeuralCloud_OasisWall_01",
    "BG_NeuralCloud_RossumRuin_01",
    "BG_NeuralCloud_RossumRuinCenter_01",
    "BG_None_Black_Door_01",
    "BG_None_Black_Door_02",
    "BG_None_Cabin_01",
    "BG_None_Cabin_02",
    "BG_None_Cabin_03",
    "BG_None_Carriage_01_01",
    "BG_None_Carriage_01_02",
    "BG_None_Carriage_01",
    "BG_None_Carriage_02_01",
    "BG_None_Carriage_02",
    "BG_None_Carriage_03_01",
    "BG_None_Carriage_03_02",
    "BG_None_Carriage_03_03",
    "BG_None_Carriage_03_04",
    "BG_None_Carriage_03_05",
    "BG_None_Carriage_03_06",
    "BG_None_Carriage_03_07",
    "BG_None_Carriage_03_21",
    "BG_None_Carriage_03_22",
    "BG_None_Carriage_03_23",
    "BG_None_Carriage_03",
    "BG_None_Carriage_04_01",
    "BG_None_Carriage_04_02",
    "BG_None_Carriage_04_03",
    "BG_None_Carriage_04",
    "BG_None_Carriage_Broken_01",
    "BG_None_Carriage_Broken_02",
    "BG_None_Carriage_Centre_01",
    "BG_None_Carriage_Repair_01",
    "BG_None_Carriage_Repair_02",
    "BG_None_Carriage_Repair_03",
    "BG_None_Carriage_Welcome_01",
    "BG_None_Class_01",
    "BG_None_Class_02",
    "BG_None_Coast_Day_01",
    "BG_None_Coast_Night_01",
    "BG_None_CruiseShipCasino_Night_01",
    "BG_None_CruiseShipColosseum_Night_01",
    "BG_None_CruiseShipDeck_Night_01",
    "BG_None_CruiseShipLobby_Night_01",
    "BG_None_Drone_01",
    "BG_None_ElmoParty_Day_01",
    "BG_None_GF1_01",
    "BG_None_GF1_02",
    "BG_None_GF1_03",
    "BG_None_GF1_04",
    "BG_None_GF1_05",
    "BG_None_GF1_06",
    "BG_None_Grifon_01",
    "BG_None_Grifon_02",
    "BG_None_Grifon_03",
    "BG_None_Hotelmonitoring_Day_01",
    "BG_None_Landing_Day_01",
    "BG_None_Landing_Dusk_01",
    "BG_None_Landing_Night_01",
    "BG_None_Lounge_01",
    "BG_None_Motorhome_day_01",
    "BG_None_Motorhome_Night_01",
    "BG_None_Motorhome_Night_02",
    "BG_None_OperatingRoom_01",
    "BG_None_PersonalLounge_01",
    "BG_None_PersonalLounge_02",
    "BG_None_Pipe_01",
    "BG_None_Radiationproof",
    "BG_None_Sea_Day_01",
    "BG_None_Train_01",
    "BG_None_Trunkm_01",
    "BG_None_Trunkm_02",
    "BG_None_UH-60HelicopterCabin_Dawn_01",
    "BG_None_Vow_01",
    "BG_None_Ward_01",
    "BG_None_Ward_02",
    "BG_None_Zion_01",
    "BG_None_Zion_02",
    "BG_PrivatePlane_Day_01",
    "BG_Purify_Hospital_Day_01",
    "BG_Purify_Hospital_Dusk_01",
    "BG_Purify_Road_Day_01",
    "BG_Purify_Road_Dusk_01",
    "BG_Red_Bedroom_Day_01",
    "BG_Red_BloodNest_Day_01",
    "BG_Red_BloodNest_Day_02",
    "BG_Red_Castle_Day_01",
    "BG_Red_Castle_Night_01",
    "BG_Red_Cellar_Day_01",
    "BG_Red_Cellar_Day_02",
    "BG_Red_Cellar_Night_01",
    "BG_Red_Cellar_Night_02",
    "BG_Red_Cellar_Night_03",
    "BG_Red_Cellar_Night_04",
    "BG_Red_Flowersea_Day_01",
    "BG_Red_Flowersea_Night_01",
    "BG_Red_Livingroom_Day_01",
    "BG_Red_NemesisRoom_Day_01",
    "BG_Red_NemesisRoom_Night_01",
    "BG_SeleneTidalPowerStation_Day_01",
    "BG_White_Backstage_Day_01",
    "BG_White_BotanyLab_Day_01",
    "BG_White_CongressmenOffice_Day_01",
    "BG_White_Corridor_Day_01",
    "BG_White_Corridor_Night_01",
    "BG_White_Girard_Day_01",
    "BG_White_Girard_Night_01",
    "BG_White_Greenhouse_Day_01",
    "BG_White_HelenHome_01",
    "BG_White_HeliSystem_01",
    "BG_White_Hospital_Day_01",
    "BG_White_Hospitalroom_01",
    "BG_White_Hospitalroom_02",
    "BG_White_HotelRoom_Day_01",
    "BG_White_HotelRoom_Night_01",
    "BG_White_HotelRoom_Night_02",
    "BG_White_LabRoom_Day_01",
    "BG_White_Mansion_Night_01",
    "BG_White_MansionRoom_01",
    "BG_White_MansionRoom_02",
    "BG_White_MediaConference_Day_01",
    "BG_White_NewVeniceHotel_Day_01",
    "BG_White_NewVeniceHotel_Night_01",
    "BG_White_NewVeniceStreet_Day_01",
    "BG_White_NewVeniceStreet_Day_02",
    "BG_White_NewVeniceStreet_Night_01",
    "BG_White_NewVeniceStreet_Night_02",
    "BG_White_Office_Day_01",
    "BG_White_Office_Day_02",
    "BG_White_Office_Night_01",
    "BG_White_Office_Night_02",
    "BG_White_OldVeniceCoast_Day_01",
    "BG_White_OldVeniceCoast_Night_01",
    "BG_White_ParadeusLab_Night_01",
    "BG_White_ParadeusLab2_Day_01",
    "BG_White_ParadeusLab2_Night_01",
    "BG_White_Paradeuslab2_Night_02",
    "BG_White_ParadeusLab3_Night_01",
    "BG_White_Patio_Day_01",
    "BG_White_Platform_Day_01",
    "BG_White_PurificationPlant_01",
    "BG_White_Room_Night_02",
    "BG_White_sickroom_Day_01",
    "BG_White_Street_Day_01",
    "BG_White_Summit_Day_01",
    "BG_White_TrainFortress_01",
    "BG_Yellow_Antnest_Day_01",
    "BG_Yellow_banquet_Night_01",
    "BG_Yellow_Bar_Day_01",
    "BG_Yellow_barracks_Day_01",
    "BG_Yellow_Bolidaonature_Day_01",
    "BG_Yellow_Bolidaonature_Night_01",
    "BG_Yellow_Bolidaoroom_Day_01",
    "BG_Yellow_Bolidaoroom_Night_01",
    "BG_Yellow_Bolidaoroom_Night_02",
    "BG_Yellow_Bridge_Day_01",
    "BG_Yellow_BrokenFactory_Day_01",
    "BG_Yellow_Canyon_Day_01",
    "BG_Yellow_Canyon_Day_02",
    "BG_Yellow_Canyon_Dusk_01",
    "BG_Yellow_Canyon_Factory_Day_01",
    "BG_Yellow_Canyon_Factory_Dusk_01",
    "BG_Yellow_Canyon_Factory_Night_01",
    "BG_Yellow_Chapel_Day_01",
    "BG_Yellow_Chapel_Day_02",
    "BG_Yellow_Chapel_Day_03",
    "BG_Yellow_cityX_Day_01",
    "BG_Yellow_cityX_Day_02",
    "BG_Yellow_cityX_Night_01",
    "BG_Yellow_Dormitory_Day_01",
    "BG_Yellow_ElmoGoingon_Day_01",
    "BG_Yellow_Factory_Day_01",
    "BG_Yellow_Factory_Day_02",
    "BG_Yellow_Factory_Day_03",
    "BG_Yellow_Factory_Day_04",
    "BG_Yellow_Factory_Night_01",
    "BG_Yellow_Foothold_Day_01",
    "BG_Yellow_Grayshipdeck_Day_01",
    "BG_Yellow_GuardBarracks_Day_01",
    "BG_Yellow_GuardBarracks_Night_01",
    "BG_Yellow_Hideout_Day_01",
    "BG_Yellow_Hotelwarehouse_Night_01",
    "BG_Yellow_IncinerationPlant_01",
    "BG_Yellow_Interrogationroom_Night_03",
    "BG_Yellow_Lands_Day_01",
    "BG_Yellow_Lands_Day_Snow_01",
    "BG_Yellow_Lands_Day_Storm_01",
    "BG_Yellow_Lands_Dusk_01",
    "BG_Yellow_Lands_Night_01",
    "BG_Yellow_Market_Day_01",
    "BG_Yellow_Market_Night_01",
    "BG_Yellow_MarleyCorridor_Day_01",
    "BG_Yellow_MarleyInside_Day_01",
    "BG_Yellow_MarleyOutside_Day_01",
    "BG_Yellow_MarleyOutside2_Day_01",
    "BG_Yellow_MarleyOutside2_Day_02",
    "BG_Yellow_MarleyOutside2_Night_01",
    "BG_Yellow_MarleyTower_Storehouse_Day_01",
    "BG_Yellow_MarleyTower_Storehouse_Day_02",
    "BG_Yellow_MarleyTower_Storehouse_Day_03",
    "BG_Yellow_MarleyTowerInside_Day_01",
    "BG_Yellow_MarleyTowerInside_Dusk_01",
    "BG_Yellow_MarleyTowerTop_Day_01",
    "BG_Yellow_MarleyTowerTop_Dusk_01",
    "BG_Yellow_MarleyTowerTop_Night_01",
    "BG_Yellow_NearTrain_Day_01",
    "BG_Yellow_NearTrain_Dusk_01",
    "BG_Yellow_OathChurch_01",
    "BG_Yellow_OathChurch_02",
    "BG_Yellow_ParadeusFacility_Night_01",
    "BG_Yellow_ParadeusFacility_Night_02",
    "BG_Yellow_Path_Day_01",
    "BG_Yellow_Path_Dusk_01",
    "BG_Yellow_Path_Night_01",
    "BG_Yellow_PharmaFactory_Day_01",
    "BG_Yellow_Port_Day_01",
    "BG_Yellow_Port_Day_Snow_01",
    "BG_Yellow_Port_Dusk_01",
    "BG_Yellow_Port_Dusk_Snow_01",
    "BG_Yellow_prison_Night_01",
    "BG_Yellow_prison_Night_02",
    "BG_Yellow_Road_Day_01",
    "BG_Yellow_Road_Day_02",
    "BG_Yellow_Road_Day_Snow_01",
    "BG_Yellow_Road_Dusk_01",
    "BG_Yellow_Road_Dusk_Snow_01",
    "BG_Yellow_Road_Night_01",
    "BG_Yellow_RuinsBuilding_Day_01",
    "BG_Yellow_RuinsBuilding_Night_01",
    "BG_Yellow_RuinsBuilding_Night_02",
    "BG_Yellow_RuinsBuilding_Night_03",
    "BG_Yellow_RuinsHamlet_Dusk_01",
    "BG_Yellow_RuinsHamlet_Night_01",
    "BG_Yellow_RuinsHamlet_Night_02",
    "BG_Yellow_salon_Day_01",
    "BG_Yellow_SaltMine_Night_01",
    "BG_Yellow_SaltMine_Night_02",
    "BG_Yellow_SaltMine_Tunnel_Night_01",
    "BG_Yellow_SaltMine_Tunnel_Night_02",
    "BG_Yellow_SaltMineDepths_Night_01",
    "BG_Yellow_SaltMineEntrance_Night_01",
    "BG_Yellow_ServerRoom_Day_01",
    "BG_Yellow_Settlement_Street_Day_01",
    "BG_Yellow_Settlement_VacantArea_Day_01",
    "BG_Yellow_Settlement_VacantArea_Night_01",
    "BG_Yellow_Street_Dusk_01",
    "BG_Yellow_Street_Dusk_02",
    "BG_Yellow_telecompark_Day_01",
    "BG_Yellow_telecompark_Night_01",
    "BG_Yellow_TestField_Day_01",
    "BG_Yellow_Town_Day_01",
    "BG_Yellow_Town_Day_02",
    "BG_Yellow_Town_Day_03",
    "BG_Yellow_Town_Dusk_01",
    "BG_Yellow_Town_Night_01",
    "BG_Yellow_Train_Day_01",
    "BG_Yellow_Train_Day_Snow_01",
    "BG_Yellow_Train_Dusk_01",
    "BG_Yellow_Wilderness_Day_01",
    "BG_Yellow_Wilderness_Dusk_01",
    "BG_Yellow_Wilderness_Night_01",
    "BG_Yellow_Wilderness_Night_02",
    "BG_Yellow_XBase_Day_01",
    "BG_Yellow_XBaseIndoor_Night_01",
    "BG_Yellow_XBaseReal_Night_01",
];

export type ModelSourceType = 'model3' | 'moc3';

export type LocalizedNameMap = Record<string, string>;

export interface ModelDefinition {
  id: string;
  displayName: string;
  sourceType: ModelSourceType;
  displayNames?: LocalizedNameMap;
}

function normalizePath(path: string): string {
  return path.replace(/\\/g, '/');
}

function normalizeNameMap(map: Record<string, string> | undefined | null): LocalizedNameMap | undefined {
  if (!map) {
    return undefined;
  }

  const normalized: LocalizedNameMap = {};
  let hasEntries = false;

  for (const [rawKey, value] of Object.entries(map)) {
    if (!rawKey || value == null) {
      continue;
    }
    const key = rawKey.toLowerCase();
    normalized[key] = value;
    hasEntries = true;
  }

  return hasEntries ? normalized : undefined;
}

function resolveNameOverrides(id: string): LocalizedNameMap | undefined {
  if (!id) {
    return undefined;
  }
  const normalizedId = normalizeModelId(id);
  const override =
    ModelNameOverrides[normalizedId] ?? ModelNameOverrides[normalizedId.toLowerCase()];
  return normalizeNameMap(override);
}

function resolveLocaleFromMap(map: LocalizedNameMap, locale: string | undefined): string | undefined {
  if (!map || Object.keys(map).length === 0) {
    return undefined;
  }

  const normalizedLocale = locale ? locale.toLowerCase() : undefined;

  const directMatch =
    normalizedLocale != null ? map[normalizedLocale] : undefined;
  if (directMatch) {
    return directMatch;
  }

  if (normalizedLocale != null) {
    const dashIndex = normalizedLocale.indexOf('-');
    if (dashIndex > 0) {
      const languageOnly = normalizedLocale.substring(0, dashIndex);
      const languageMatch = map[languageOnly];
      if (languageMatch) {
        return languageMatch;
      }
    }
  }

  if (map.en) {
    return map.en;
  }

  const [, firstValue] = Object.entries(map)[0] ?? [];
  return firstValue;
}

function createDisplayNameFromPath(path: string): string {
  const normalized = normalizePath(path);
  const segments = normalized.split('/');
  if (segments.length >= 2) {
    const folder = segments[segments.length - 2];
    const file = segments[segments.length - 1];
    return `${folder}/${file}`;
  }
  return normalized;
}

export function getAvailableModels(gameIndex = 0): ModelDefinition[] {
  switch (gameIndex) {
    case 0:
    default:
      return ModelDir_GFL2.map((entry) => {
        const normalized = normalizePath(entry);
        const displayNames = resolveNameOverrides(normalized);
        return {
          id: entry,
          displayName: entry,
          sourceType: 'model3' as ModelSourceType,
          ...(displayNames ? { displayNames } : {}),
        };
      });
  }
}

export function getAvailableBackgrounds(gameIndex = 0): string[] {
  switch (gameIndex) {
    case 0:
    default:
      return BgNames_GFL2;
  }
}

export function getModelDefinition(gameIndex: number, modelIndex: number): ModelDefinition | null {
  const models = getAvailableModels(gameIndex);
  if (models.length === 0) {
    return null;
  }
  const safeIndex = ((modelIndex % models.length) + models.length) % models.length;
  return models[safeIndex] ?? null;
}

export function getModelDisplayName(
  model: ModelDefinition,
  locale?: string
): string {
  if (!model) {
    return '';
  }

  const localized =
    model.displayNames && resolveLocaleFromMap(model.displayNames, locale);

  if (localized) {
    return localized;
  }

  return model.displayName;
}

// 外部定義ファイル（json）と合わせる
export const MotionGroupIdle = 'Idle'; // アイドリング
export const MotionGroupTapBody = 'TapBody'; // 体をタップしたとき

// 外部定義ファイル（json）と合わせる
export const HitAreaNameHead = 'Head';
export const HitAreaNameBody = 'Body';

// モーションの優先度定数
export const PriorityNone = 0;
export const PriorityIdle = 1;
export const PriorityNormal = 2;
export const PriorityForce = 3;

// MOC3の一貫性検証オプション
export const MOCConsistencyValidationEnable = true;

// デバッグ用ログの表示オプション
export const DebugLogEnable = true;
export const DebugTouchLogEnable = false;

// Frameworkから出力するログのレベル設定
export const CubismLoggingLevel: LogLevel = LogLevel.LogLevel_Verbose;

// デフォルトのレンダーターゲットサイズ
export const RenderTargetWidth = 1900;
export const RenderTargetHeight = 1000;
