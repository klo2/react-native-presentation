// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, SlideSet,
    TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text,
    Notes
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./index.css");
require("codemirror/mode/jsx/jsx");
require("spectacle/lib/themes/default/dark.codemirror.css");

import {FolderStructure, Folder, File} from './folders';

import ReactExample from './react-example';
import NativeExample from './native-example';
import WithSlidesLink from './with-slides-link';
import {IPhone, Android} from './phones';

const images = {
    accueil: require("../assets/accueil.jpg"),
    reactsite: require("../assets/reactsite.jpg"),
    city: require("../assets/city.jpg"),
    buttons: require("../assets/buttons.png"),
    reactNativeElements: require("../assets/react-native-elements.png"),
    reactNativeMaterial1: require("../assets/reactNativeMaterial1.gif"),
    reactNativeMaterial2: require("../assets/reactNativeMaterial2.gif"),
    reactNativeMaterial3: require("../assets/reactNativeMaterial3.gif"),
    androidCheckin: require('../assets/android-checkin.png'),
    androidMenu: require('../assets/android-menu.png'),

    androidSampleApp: require('../assets/android-sample-app.png'),
    iosSampleApp: require('../assets/ios-sample-app.png'),
    debugging: require('../assets/debugging.gif'),
    hotReload: require('../assets/hot-reload.gif'),
    inspectorCloseup: require('../assets/inspector-closeup.png'),
    networkInspector: require('../assets/network-inspector.png'),
    stackTrace: require('../assets/stack-trace.png'),
    howItWorks: require('../assets/how-it-works.png'),
    jestExample: require('../assets/jest-example.png'),
    jackie: require('../assets/jackie.jpg'),
    navigationAndroid: require('../assets/navigation-android.gif'),
    navigationIos: require('../assets/navigation-ios.gif'),

    reduxStateTree1: require('../assets/redux-state-tree-1.png'),
    reduxStateTree2: require('../assets/redux-state-tree-2.png'),
    reduxTimeTravel: require('../assets/redux-time-travel.gif'),
};

const logos = {
    airbnb: require('../assets/users/airbnb.png'),
    facebook: require('../assets/users/facebook.png'),
    gyroscope: require('../assets/users/gyroscope.png'),
    instagram: require('../assets/users/instagram.jpg'),
    robin: require('../assets/users/robin.png'),
    vogue: require('../assets/users/vogue.jpg'),
};

preloader(logos);
preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

// Useful links:
// http://www.reactnativeexpress.com/
// https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/
//  "learn once, write anywhere"
//   Different platforms have different looks, feels, and capabilities, and as such, we should still be developing discrete apps for each platform
export default WithSlidesLink(class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
                <Slide transition={["zoom"]} bgImage={images.accueil.replace("/", "")}>
                    <Heading size={2} fit caps textColor='tertiary'>
                        Bienvenue au Meetup React-Native</Heading>
                    <List>
                        <Appear><ListItem>Claude LEULLIETTE</ListItem></Appear>
                        <Appear><ListItem>Guillaume BAECHLER</ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Notes>
                        <h4>Slide notes</h4>
                        <ol>
                            <li>note 1</li>
                            <li>note 2</li>
                        </ol>
                    </Notes>
                    <Heading size={2} fit textColor='tertiary'>Qu'est-ce que React-Native ?</Heading>
                    <List>
                        <Appear><ListItem fit>Developpement d'application native avec React</ListItem></Appear>
                        <Appear><ListItem fit>Support Android et iOS</ListItem></Appear>
                        <Appear><ListItem fit>Expérience utilisateur - look and feel natif</ListItem></Appear>
                        <Appear><ListItem fit>Performance équivalente </ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading size={2} textColor='tertiary'>Qu'est-ce que React ?</Heading>
                    <List>
                        <Appear><ListItem>React est la librairie Javascript créée par Facebook</ListItem></Appear>
                        <Appear><ListItem>"Learn once, write everywhere"</ListItem></Appear>
                        <Appear><ListItem>Open Source - nombreux contributeurs sur Github</ListItem></Appear>
                        <Appear><ListItem>Une approche par composants</ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["zoom", "fade"]} bg bgColor="primary">
                    <Heading size={2} textColor='tertiary'>Comparaison avec les autres technologies</Heading>
                    <List>
                        <Appear><ListItem>Apache Cordova et Ionic </ListItem></Appear>
                        <Appear><ListItem>Application native qui charge une webview</ListItem></Appear>
                        <Appear><ListItem>Une page web(html, css, javascript) est chargée dans cette webview</ListItem></Appear>
                        <Appear><ListItem>Un bridge javascript / natif permet d'utiliser les méthodes natives</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["zoom", "fade"]} bg bgColor="primary">
                    <Heading size={2} textColor='tertiary'>Les problèmes</Heading>
                    <List>
                        <Appear><ListItem>Glisser déposer</ListItem></Appear>
                        <Appear><ListItem>Liste d'image</ListItem></Appear>
                        <Appear><ListItem>Apparition du clavier</ListItem></Appear>
                        <Appear><ListItem>Webview style</ListItem></Appear>
                        <Appear><ListItem>Performance inégale</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["zoom", "fade"]} bg bgColor="primary">
                    <Heading size={2} textColor='tertiary'>L'approche React Native</Heading>
                    <List>
                        <Appear><ListItem>React  Native transforme la vue en code natif</ListItem></Appear>
                        <Appear><ListItem>Pas de perte de temps - hot reloading</ListItem></Appear>
                        <Appear><ListItem>Se combine avec les composants écrits en Objective-C, Java ou Swift. </ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["zoom", "fade"]}  bgImage={images.reactsite.replace("/", "")}>
                    <Heading size={5}>le site React Native</Heading>
                    <List>
                        <Appear><ListItem>Composants React - View, Text, Image, etc</ListItem></Appear>
                        <Appear><ListItem>Gestion des styles et organisation dans l'écran(flexbox)</ListItem></Appear>
                        <Appear><ListItem>Animations</ListItem></Appear>
                        <Appear><ListItem>Navigators</ListItem></Appear>
                        <Appear><ListItem>XHR / AJAX Support</ListItem></Appear>
                    </List>
                </Slide>




                <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
                    <Heading size={1} caps fit textColor="primary">
                        Les autres librairies de composants...
                    </Heading>
                </Slide>

                <Slide transition={["slide"]}>
                    <Heading size={3} textColor="black">
                        React Native Material UI
                    </Heading>

                    <Layout>
                        <Fill>
                            <Image width="75%" src={images.reactNativeMaterial1}/>
                        </Fill>
                        <Fill>
                            <Image width="75%" src={images.reactNativeMaterial2}/>
                        </Fill>
                        <Fill>
                            <Image width="75%" src={images.reactNativeMaterial3}/>
                        </Fill>
                    </Layout>

                    <Link
                        textColor="tertiary"
                        href="https://github.com/xotahal/react-native-material-ui"
                    >
                        https://github.com/xotahal/react-native-material-ui
                    </Link>
                </Slide>

                <Slide transition={["slide"]}>
                    <Heading size={1} fit textColor="black">
                        React Native Elements
                    </Heading>
                    <Image width="75%" src={images.reactNativeElements}/>
                    <Link
                        textColor="tertiary"
                        href="https://github.com/react-native-community/react-native-elements"
                    >
                        https://github.com/react-native-community/react-native-elements
                    </Link>
                </Slide>


                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Getting Started
                    </Text>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Serveur Node.js
                    </Text>

                    <CodePane
                        lang="jsx"
                        source={`
> brew install node
> brew install watchman
> npm install -g react-native-cli
`.trim()}
                        margin="20px auto"
                    />

                    <Appear>
                        <Link
                            textColor="black"
                            href="https://facebook.github.io/react-native/docs/getting-started.html"
                        >
                            https://facebook.github.io/react-native/docs/getting-started.html
                        </Link>
                    </Appear>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Créer un nouveau projet
                    </Text>

                    <CodePane
                        lang="jsx"
                        source={`
> react-native init AwesomeProject

...

✨  Done in 5.11s.

To run your app on iOS:
   cd /Users/you/Documents/AwesomeProject
   react-native run-ios
   - or -
   Open ios/AwesomeProject.xcodeproj in Xcode
   Hit the Run button

To run your app on Android:
   cd /Users/you/Documents/AwesomeProject
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android
`.trim()}
                        margin="20px auto"
                    />
                </Slide>

                <Slide transition={["slide"]}>
                    <FolderStructure>
                        <Folder name='AwesomeProject' textColor='tertiary'>
                            <Folder name='__tests__'/>

                            <Folder name='android'>
                                <Folder name='app' textColor='grey'/>
                                <Folder name='gradle' textColor='grey'/>
                            </Folder>

                            <Folder name='ios'>
                                <Folder name='AwesomeProject.xcodeproj' textColor='grey'/>
                                <Folder name='AwesomeProjectTests' textColor='grey'/>
                            </Folder>

                            <File textColor='grey'>
                                index.android.js
                            </File>
                            <File textColor='grey'>
                                index.ios.js
                            </File>
                        </Folder>
                    </FolderStructure>
                </Slide>

                <Slide transition={["slide"]}>
                    <Heading size={3} textColor="black">
                        Run !
                    </Heading>

                    <CodePane
                        lang="jsx"
                        source={`
> react-native run-ios

> emulator @Nexus_5_API_23 -dns-server 8.8.8.8
> react-native run-android
`.trim()}
                        margin="20px auto"
                    />

                    <Layout>
                        <Fill>
                            <Image width="50%" src={images.androidSampleApp}/>
                        </Fill>
                        <Fill>
                            <Image width="50%" src={images.iosSampleApp}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Outils intégrés
                    </Text>
                    <Image width="35%" src={images.androidMenu}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Debug JS distant
                    </Text>
                    <Image src={images.debugging}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Activation Hot Reloading
                    </Text>
                    <Image src={images.hotReload}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Inspecteur d'élement
                    </Text>

                    <Image src={images.inspectorCloseup}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Inspecteur réseau
                    </Text>

                    <Image src={images.networkInspector}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Stack Trace
                    </Text>

                    <Image width='35%' src={images.stackTrace}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor='tertiary'>
                        On va pas se mentir
                    </Text>

                    <List>
                        <Appear><ListItem>Ecosyteme dynamique</ListItem></Appear>
                        <Appear><ListItem>Pas de version majeur pour l'instant. Une version mineure par mois, un fix par semaine.</ListItem></Appear>
                        <Appear><ListItem>!!!  nombreux breaking changes entre les versions !!!</ListItem></Appear>
                        <Appear><ListItem>La communauté qui produit des modules ne suit pas toujours les changements</ListItem></Appear>
                        <Appear><ListItem>Suivre : <Link
                            textColor="black"
                            href="https://js.coach/"
                        >
                            https://js.coach/
                        </Link></ListItem></Appear>
                    </List>
                </Slide>

                {/*<Slide transition={["slide"]}>*/}
                    {/*<Text textColor='tertiary'>*/}
                        {/*Performance*/}
                    {/*</Text>*/}

                    {/*<List>*/}
                        {/*<Appear><ListItem>Animations - Precomputed and Optimised natively</ListItem></Appear>*/}
                        {/*<Appear><ListItem>Reduce re-renders</ListItem></Appear>*/}
                        {/*<Appear><ListItem>react-native-workers / native</ListItem></Appear>*/}
                        {/*<Appear><ListItem>Inbuilt performance tooling</ListItem></Appear>*/}
                        {/*<Appear><ListItem>Android - systrace, iOS Instruments</ListItem></Appear>*/}
                    {/*</List>*/}
                {/*</Slide>*/}


                <Slide transition={["slide"]}>
                    <Image src={images.jackie}/>
                </Slide>


                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Qui l'utilise ?
                    </Text>

                    <Layout>
                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.airbnb}
                            />
                            <Text textColor='grey'>Airbnb</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.facebook}
                            />
                            <Text textColor='grey'>Facebook</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.gyroscope}
                            />
                            <Text textColor='grey'>Gyroscope</Text>
                        </Fill>
                    </Layout>

                    <div className='show-case__separator'/>

                    <Layout>
                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.instagram}
                            />
                            <Text textColor='grey'>Instagram</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.robin}
                            />
                            <Text textColor='grey'>Round Robin</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.vogue}
                            />
                            <Text textColor='grey'>Vogue</Text>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["spin", "slide"]} bgColor="tertiary">
                    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                        Questions?
                    </Heading>
                </Slide>
            </Deck>
        );
    }
});