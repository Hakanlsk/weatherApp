# Hava Durumu ve Etkinlikler Uygulaması

Bu uygulama, kullanıcının konum bilgisini veya istediği şehri aratarak bir şehir seçmesiyle seçilen şehre ait hava durumu bilgilerini ve o şehirde yapılacak etkinlikleri listeler. Kullanıcılar hava durumu bilgilerini öğrenebilir ve seyahat planları yaparken etkinlikleri keşfedebilirler.

## Uygulamaya Genel Bakış

<div style="display: flex;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/a554404c-a1eb-4b29-a1ba-2c874f15b7f4" alt="Resim 1" style="width: 20%; margin-right: 10px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/26a6b655-c57e-4c3b-9b8a-ffedc09a8911" alt="Resim 1" style="width: 20%; margin-right: 10px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/03951429-e8a5-47b0-82b2-e58e8082bd95" alt="Resim 1" style="width: 20%; margin-right: 10px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/0d417cdd-074e-4cd1-a3ca-d0d2008bf417" alt="Resim 1" style="width: 20%; margin-right: 10px;">
</div>

# Ek Özellikler
## Konum Bilgisi

Uygulamaya giriş yaptığınızda konum izni istenecek ve onay verdiğinizde ana sayfadaki konumdan gelen şehir bilgisine göre "Click to accept {cityName} as your location" butonu görünecektir. Bu butona tıkladığınızda şehir bilgisi inputa aktarılacak ve API'ye gönderilecektir. API, konumdaki şehri eşleştirip inputun altında gösterecektir. Bu şehre tıklayarak o şehre ait hava durumu bilgilerinin olduğu sayfaya yönlendirileceksiniz. Eğer konum izni verilmezse "location not found, check location settings" uyarısı gözükür. Kullanıcı konum bilgisi olmadan şehir ismi aratarak istediği şehrin hava durumu bilgilerine ulaşabilir.
<div style="display: flex;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/acca1765-6b39-4162-84b8-f2004c9def0b" alt="Resim 1" style="width: 20%; margin-right: 10px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/a554404c-a1eb-4b29-a1ba-2c874f15b7f4" alt="Resim 1" style="width: 20%; margin-right: 10px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/4179cddd-594e-4bb8-a53c-37d7b1097d7e" alt="Resim 1" style="width: 20%; margin-right: 10px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/8f42b8e8-bf59-4a08-93b3-860dce73ffeb" alt="Resim 1" style="width: 20%; margin-right: 10px;">
</div>

## Seçilen Şehre Ait Etkinlik Bilgileri

Bu sayfada, seçilen şehre ait etkinlik bilgileri kategorilere ayrılarak listelenir. Kullanıcılar etkinlik kutucuğunun sağ tarafında bulunan aşağı ok butonuna basarak etkinlik açıklamasını görebilirler. Etkinlikler genellikle "Festival", "Spor", "Konser" gibi kategorilere ayrılmıştır, böylece kullanıcılar ilgi alanlarına göre etkinlikleri kolayca bulabilirler.
<div style="display: flex;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/9bcc03ec-755c-4c23-b61c-018e79330990" alt="Resim 1" style="width: 20%; margin-right: 10px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/295453c6-3f0a-4fd9-908f-4c89785dc757" alt="Resim 1" style="width: 20%; margin-right: 10px;">
  <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/521ff25f-bf89-4e01-a512-e65089019044" alt="Resim 1" style="width: 20%; margin-right: 10px;">
</div>

## Bazı Hava Durumu Bilgilerinin Grafiklerle Gösterilmesi

Bu sayfada, seçilen şehre ait bazı sayısal hava durumu bilgileri grafiklerle sunularak görselleştirilir. Grafikler sayesinde kullanıcılar hava durumunu daha kolay anlayabilir ve kararlarını buna göre verebilirler. Örneğin, sıcaklık grafiği ile hava sıcaklığının zaman içinde nasıl değiştiğini görebilirler.

<div style="display: flex;>
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/1c00f242-2b93-4c56-a4df-ce0fbbf6c958" alt="Resim 7" style="width: 20%; margin-right: 10px;">
    <img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/76f61f6c-bf9c-4b5c-83bb-383b4038adb2" alt="Resim 8" style="width: 20%; margin-right: 10px;">
</div>

## Uyarı Mesajları ve Verilerin Yükleniyor Durumda Olduğu Bilgisi
Ana ekranda input kısmına eğer kullanıcının girdiği şehir ismi api verilerindeki şehir isimlerinden herhangi biriyle eşleştirilemediyse ya da kullanıcı şehrin bulunması için yeterli sayıda harf girişi yapmadıysa (3) kullanıcıya kırmızı renkte "Lütfen geçerli bir şehir adı girin" mesajı gösterilir.
Veriler yüklenirken, React Native'in ActivityIndicator bileşeni kullanılarak yükleniyor ikonu döndürülür. Eğer API'den veri gelmezse, ekranda kırmızı renkte "Veriler yüklenirken bir hata oluştu. Lütfen uygulamayı yeniden başlatın." şeklinde bir uyarı mesajı görüntülenir. Bu durumda kullanıcıya uygulamayı yeniden başlatması tavsiye edilir. 

<div style="display: flex;">

</div>

## Responsive Tasarım

<div style="display: flex;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/9ef03714-25b1-43ed-91df-9b5dbb5f1ec1" alt="Resim 1" style="width: 20%; margin-right: 10px;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/8c6dddd2-b750-4242-a66c-9827be196819" alt="Resim 1" style="width: 20%; margin-right: 10px;">
<img src="https://github.com/Hakanlsk/weatherApp/assets/123507532/26a6b655-c57e-4c3b-9b8a-ffedc09a8911" alt="Resim 1" style="width: 20%; margin-right: 10px;">
</div>
