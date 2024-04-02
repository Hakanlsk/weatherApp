# Hava Durumu ve Etkinlikler Uygulaması

Bu uygulama, kullanıcının konum bilgisini veya istediği şehri aratarak bir şehir seçmesiyle seçilen şehre ait hava durumu bilgilerini ve o şehirde yapılacak etkinlikleri listeler. Kullanıcılar hava durumu bilgilerini öğrenebilir ve seyahat planları yaparken etkinlikleri keşfedebilirler.

## Uygulamaya Genel Bakış

<div style="display: flex;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/a554404c-a1eb-4b29-a1ba-2c874f15b7f4" alt="Resim 1" style="width: 20%; margin-right: 20px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/2b679a40-dd8a-4f86-a7d0-b807c6e419c4" alt="Resim 2" style="width: 20%; margin-right: 20px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/cad6d4ae-6eaf-4746-a059-81902ec37bcf" alt="Resim 3" style="width: 20%; margin-right: 20px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/534eafd2-cecd-414a-92bf-05d70e5be23b" alt="Resim 4" style="width: 20%; margin-right: 20px;">
</div>

# Ek Özellikler
## Konum Bilgisi

Uygulamaya giriş yaptığınızda konum izni istenecek ve onay verdiğinizde ana sayfadaki konumdan gelen şehir bilgisine göre "Click to accept {cityName} as your location" butonu görünecektir. Bu butona tıkladığınızda şehir bilgisi inputa aktarılacak ve API'ye gönderilecektir. API, konumdaki şehri eşleştirip inputun altında gösterecektir. Bu şehre tıklayarak o şehre ait hava durumu bilgilerinin olduğu sayfaya yönlendirileceksiniz. Eğer konum izni verilmezse "location not found, check location settings" uyarısı gözükür. Kullanıcı konum bilgisi olmadan şehir ismi aratarak istediği şehrin hava durumu bilgilerine ulaşabilir.
<div style="display: flex;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/acca1765-6b39-4162-84b8-f2004c9def0b" alt="Resim 5" style="width: 20%; margin-right: 20px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/a554404c-a1eb-4b29-a1ba-2c874f15b7f4" alt="Resim 6" style="width: 20%; margin-right: 20px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/4179cddd-594e-4bb8-a53c-37d7b1097d7e" alt="Resim 7" style="width: 20%; margin-right: 20px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/2838c906-e05c-46c2-8688-888d12f054f3" alt="Resim 8" style="width: 20%; margin-right: 20px;">
</div>

## Seçilen Şehre Ait Etkinlik Bilgileri

Bu sayfada, seçilen şehre ait etkinlik bilgileri kategorilere ayrılarak listelenir. Kullanıcılar etkinlik kutucuğunun sağ tarafında bulunan aşağı ok butonuna basarak etkinlik açıklamasını görebilirler. Etkinlikler genellikle "Festival", "Spor", "Konser" gibi kategorilere ayrılmıştır, böylece kullanıcılar ilgi alanlarına göre etkinlikleri kolayca bulabilirler.
<div style="display: flex;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/e52235d4-9a99-4cbf-801a-4784f91dbb25" alt="Resim 9" style="width: 20%; margin-right: 20px;"> 
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/cad6d4ae-6eaf-4746-a059-81902ec37bcf" alt="Resim 10" style="width: 20%; margin-right: 20px;">
</div>

## Bazı Hava Durumu Bilgilerinin Grafiklerle Gösterilmesi

Bu sayfada, seçilen şehre ait bazı sayısal hava durumu bilgileri grafiklerle sunularak görselleştirilir. Grafikler sayesinde kullanıcılar hava durumunu daha kolay anlayabilir ve kararlarını buna göre verebilirler. Örneğin, sıcaklık grafiği ile hava sıcaklığının zaman içinde nasıl değiştiğini görebilirler.

<div style="display: flex;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/bfa2cf5c-bfb8-4922-8a94-bf6725a7ced5" alt="Resim 11" style="width: 20%; margin-right: 20px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/980eb884-af49-4738-a918-6b6c978e8f6c" alt="Resim 11" style="width: 20%; margin-right: 20px;">
</div>

## Uyarı Mesajları ve Verilerin Yükleniyor Durumda Olduğu Bilgisi
Ana ekranda input kısmına eğer kullanıcının girdiği şehir ismi api verilerindeki şehir isimlerinden herhangi biriyle eşleştirilemediyse ya da kullanıcı şehrin bulunması için yeterli sayıda harf girişi yapmadıysa (3) kullanıcıya kırmızı renkte "Lütfen geçerli bir şehir adı girin" mesajı gösterilir.
Veriler yüklenirken, React Native'in ActivityIndicator bileşeni kullanılarak yükleniyor ikonu döndürülür. Eğer API'den veri gelmezse, ekranda kırmızı renkte "Veriler yüklenirken bir hata oluştu. Lütfen uygulamayı yeniden başlatın." şeklinde bir uyarı mesajı görüntülenir. Bu durumda kullanıcıya uygulamayı yeniden başlatması tavsiye edilir. 

<div style="display: flex;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/ea94645a-9a32-45b8-b854-acc3a2d96706" alt="home-error" style="width: 20%; margin-right: 20px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/bc693bcb-532e-4c29-b75e-b0309298d4e8" alt="loading1" style="width: 20%; margin-right: 20px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/3ea1d48d-ed7b-42d5-9836-753d0f57cef2" alt="weathererrror" style="width: 20%; margin-right: 20px;">
</div>


## Responsive Tasarım
Not: Bazı Font Size değerleri figma tasarımına uygunluk açısından ekran boyutuna göre değişiklik göstermek yerine sabit değerler tercih edilmiştir.
<div style="display: flex;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/9ef03714-25b1-43ed-91df-9b5dbb5f1ec1" alt="Resim 1" style="width: 20%; margin-right: 20px;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/8c6dddd2-b750-4242-a66c-9827be196819" alt="Resim 1" style="width: 20%; margin-right: 20px;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/26a6b655-c57e-4c3b-9b8a-ffedc09a8911" alt="Resim 1" style="width: 20%; margin-right: 20px;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/a2b1f0f4-e279-40f9-8ebc-73258ced598a" alt="Resim 1" style="width: 35%; margin-right: 20px;">  
</div>
