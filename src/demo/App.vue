<template>
    <div class="app">
        <Header
            :lang="lang"
            :langs="langs"
            @selectLang="selectLanguage"
            ></Header>
        <vue-example></vue-example>
        <Container>
            <p>{{ firstExample[lang] }}
                <pre v-highlightjs><code class="javascript">
                    import VueSticker from 'vue-sticker'

                    // inside your component
                    components: { VueSticker }
                </code></pre>
                {{ easyUsage[lang] }}
                <pre v-highlightjs><code class="html">
                    &lt;VueSticker :d="300"&gt;&lt;/VueSticker&gt;
                </code></pre>
            </p>
        </Container>
        <promo-example :lang="lang"></promo-example>
    </div>
</template>

<script>
import Header from './Header.vue'
import Container from './Container.vue'
import VueExample from './VueExample.vue'
import PromoExample from './PromoExample.vue'

export default {
    components: { Header, VueExample, PromoExample, Container },
    data() {

        return {
            langs: ['en', 'ru'],
            lang: 'en',
            firstExample: {
                en: 'Yeah. It\'s very easy to use component by default behavior like this. You just need add vue-sticker component to your application, set width and styling it.',
                ru: 'Да. Очень легко использовать компонент с поведеинем по умолчанию, как в этом примере. Достаточно добавить компонент vue-sticker в ваше приложение, установить его ширину (диаметр) и стилизовать его.'
            },
            easyUsage: {
                en: 'And in your template use component by all access properties.',
                ru: 'И в своих шалонах вы можете использовать компонент с доступными свойствами.'
            }
        }

    },
    methods: {
        selectLanguage(value) {
            this.lang = value
        }
    }
}
</script>

<style lang="sass">
body
    box-sizing: border-box
    margin: 0
    padding: 0
    font-family: 'Oswald', sans-serif
    font-size: 25px
</style>
