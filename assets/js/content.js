export const siteContent = {
  defaultLocale: "en",
  supportedLocales: ["en", "zh", "ja"],
  downloads: {
    windows: "https://github.com/luckcoding78/crosync-drop-website/releases/latest/download/CrosyncHubSetup.exe",
    mac: "https://github.com/luckcoding78/crosync-drop-website/releases/latest/download/CrosyncHub.dmg"
  },
  shared: {
    en: {
      localeLabel: "Language",
      locales: { en: "EN", zh: "中文", ja: "日本語" },
      footer: {
        copyright: "© 2026 Crosync Drop",
        privacy: "Privacy Policy",
        terms: "Terms of Use"
      }
    },
    zh: {
      localeLabel: "语言",
      locales: { en: "EN", zh: "中文", ja: "日本語" },
      footer: {
        copyright: "© 2026 Crosync Drop",
        privacy: "隐私政策",
        terms: "使用条款"
      }
    },
    ja: {
      localeLabel: "言語",
      locales: { en: "EN", zh: "中文", ja: "日本語" },
      footer: {
        copyright: "© 2026 Crosync Drop",
        privacy: "プライバシーポリシー",
        terms: "利用規約"
      }
    }
  },
  home: {
    en: {
      hero: {
        eyebrow: "Wireless file transfer for iPhone",
        title: "Crosync Drop",
        subtitle: "Use Crosync Hub to send files wirelessly from your computer to iPhone.",
        note: "Install Crosync Hub on your computer, then connect on the same local network.",
        windowsCta: "Windows Download",
        macCta: "Mac Download",
        appHint: "Install Crosync Drop on your iPhone before pairing with your desktop."
      },
      stepsTitle: "How it works",
      steps: [
        {
          title: "Install Crosync Hub",
          body: "Download and install Crosync Hub on your Mac or Windows computer."
        },
        {
          title: "Connect on the same local network",
          body: "Keep your computer and iPhone on the same local network so Crosync Drop can discover the desktop companion."
        },
        {
          title: "Choose and transfer files",
          body: "Open Crosync Drop on iPhone, connect to Crosync Hub, and send files wirelessly."
        }
      ],
      screenshotsTitle: "See the app",
      screenshotsIntro: "A quick look at Crosync Drop on iPhone and Crosync Hub on desktop.",
      screenshots: [
        { src: "assets/images/app-shot-1.png", alt: "Crosync Drop iPhone screen one" },
        { src: "assets/images/app-shot-2.png", alt: "Crosync Drop iPhone screen two" },
        { src: "assets/images/mac-hub.png", alt: "Crosync Hub on Mac desktop" }
      ],
      faqTitle: "FAQ",
      faqIntro: "Practical answers for installation, local network discovery, and transfer issues.",
      faq: [
        {
          question: "How do I install Crosync Hub?",
          answer: "Choose Windows Download or Mac Download, run the installer, and launch Crosync Hub before opening Crosync Drop on iPhone.",
          defaultOpen: true
        },
        {
          question: "Why can’t my iPhone find the computer?",
          answer: "Make sure both devices are on the same local network, Crosync Hub is running, and local network permissions are allowed on iPhone.",
          defaultOpen: true
        },
        {
          question: "What permissions matter most?",
          answer: "On iPhone, allow local network access when prompted. On desktop, make sure firewall settings are not blocking Crosync Hub.",
          defaultOpen: true
        },
        {
          question: "What if file transfer fails midway?",
          answer: "Keep both devices awake, stay on the same network, and retry after confirming Crosync Hub remains open."
        },
        {
          question: "What should I check if the network looks correct but pairing still fails?",
          answer: "Try reconnecting both devices to the same Wi-Fi, reopening Crosync Hub, and relaunching the iPhone app so discovery restarts cleanly."
        }
      ],
      supportTitle: "Still need help?",
      supportBody: "Contact support:",
      supportEmail: "bestshooter2020@163.com"
    },
    zh: {
      hero: {
        eyebrow: "iPhone 无线文件传输",
        title: "Crosync Drop",
        subtitle: "搭配 Crosync Hub，将电脑文件无线发送到 iPhone。",
        note: "先在电脑上安装 Crosync Hub，再确保电脑与 iPhone 连接到同一局域网。",
        windowsCta: "Windows Download",
        macCta: "Mac Download",
        appHint: "在与电脑配对前，请先在 iPhone 上安装 Crosync Drop。"
      },
      stepsTitle: "使用方式",
      steps: [
        {
          title: "安装 Crosync Hub",
          body: "在 Mac 或 Windows 电脑上下载安装 Crosync Hub。"
        },
        {
          title: "连接同一局域网",
          body: "让电脑和 iPhone 处于同一局域网内，方便 Crosync Drop 发现桌面端。"
        },
        {
          title: "选择并传输文件",
          body: "在 iPhone 打开 Crosync Drop，连接 Crosync Hub，然后无线发送文件。"
        }
      ],
      screenshotsTitle: "界面预览",
      screenshotsIntro: "快速查看 iPhone 端 Crosync Drop 与桌面端 Crosync Hub 的界面。",
      screenshots: [
        { src: "assets/images/app-shot-1.png", alt: "Crosync Drop iPhone 截图一" },
        { src: "assets/images/app-shot-2.png", alt: "Crosync Drop iPhone 截图二" },
        { src: "assets/images/mac-hub.png", alt: "Mac 端 Crosync Hub 界面" }
      ],
      faqTitle: "FAQ",
      faqIntro: "集中回答安装、局域网发现、权限和传输失败等常见问题。",
      faq: [
        {
          question: "如何安装 Crosync Hub？",
          answer: "选择 Windows 或 Mac 下载按钮，完成安装后先启动 Crosync Hub，再打开 iPhone 上的 Crosync Drop。",
          defaultOpen: true
        },
        {
          question: "为什么 iPhone 找不到电脑？",
          answer: "请确认两台设备处于同一局域网、Crosync Hub 已启动，并且 iPhone 已允许本地网络权限。",
          defaultOpen: true
        },
        {
          question: "最重要的权限是什么？",
          answer: "iPhone 端请允许本地网络访问；电脑端请确认防火墙没有拦截 Crosync Hub。",
          defaultOpen: true
        },
        {
          question: "传输中途失败怎么办？",
          answer: "保持两台设备处于唤醒状态，留在同一网络下，并确认 Crosync Hub 没有被关闭。"
        },
        {
          question: "网络看起来正常，但仍然无法配对怎么办？",
          answer: "可以尝试让两台设备重新连接同一 Wi-Fi，重新打开 Crosync Hub，并重启 iPhone 端 App 以重新发现设备。"
        }
      ],
      supportTitle: "还需要帮助？",
      supportBody: "联系支持邮箱：",
      supportEmail: "bestshooter2020@163.com"
    },
    ja: {
      hero: {
        eyebrow: "iPhone 向けワイヤレスファイル転送",
        title: "Crosync Drop",
        subtitle: "Crosync Hub と組み合わせて、コンピュータから iPhone へワイヤレスでファイルを送信します。",
        note: "まずコンピュータに Crosync Hub をインストールし、iPhone と同じローカルネットワークに接続してください。",
        windowsCta: "Windows Download",
        macCta: "Mac Download",
        appHint: "デスクトップと接続する前に、iPhone に Crosync Drop をインストールしてください。"
      },
      stepsTitle: "使い方",
      steps: [
        {
          title: "Crosync Hub をインストール",
          body: "Mac または Windows に Crosync Hub をダウンロードしてインストールします。"
        },
        {
          title: "同じローカルネットワークに接続",
          body: "Crosync Drop がデスクトップを見つけられるよう、iPhone とコンピュータを同じローカルネットワークに接続します。"
        },
        {
          title: "ファイルを選んで転送",
          body: "iPhone で Crosync Drop を開き、Crosync Hub に接続してファイルをワイヤレス転送します。"
        }
      ],
      screenshotsTitle: "アプリ画面",
      screenshotsIntro: "iPhone 上の Crosync Drop とデスクトップ上の Crosync Hub をすばやく確認できます。",
      screenshots: [
        { src: "assets/images/app-shot-1.png", alt: "Crosync Drop iPhone 画面 1" },
        { src: "assets/images/app-shot-2.png", alt: "Crosync Drop iPhone 画面 2" },
        { src: "assets/images/mac-hub.png", alt: "Mac 上の Crosync Hub" }
      ],
      faqTitle: "FAQ",
      faqIntro: "インストール、ローカルネットワーク検出、権限、転送失敗に関する実用的な案内です。",
      faq: [
        {
          question: "Crosync Hub はどうやってインストールしますか？",
          answer: "Windows または Mac のダウンロードボタンを選び、インストール後に Crosync Hub を起動してから iPhone で Crosync Drop を開いてください。",
          defaultOpen: true
        },
        {
          question: "iPhone からコンピュータが見つからないのはなぜですか？",
          answer: "両方のデバイスが同じローカルネットワークにあり、Crosync Hub が起動中で、iPhone のローカルネットワーク権限が許可されているか確認してください。",
          defaultOpen: true
        },
        {
          question: "重要な権限は何ですか？",
          answer: "iPhone ではローカルネットワークアクセスを許可し、コンピュータではファイアウォールが Crosync Hub を遮断していないか確認してください。",
          defaultOpen: true
        },
        {
          question: "転送が途中で失敗したらどうすればいいですか？",
          answer: "両方のデバイスをスリープさせず、同じネットワークに保ち、Crosync Hub が閉じていないことを確認してください。"
        },
        {
          question: "ネットワークが正しく見えてもペアリングできない場合は？",
          answer: "両方のデバイスを同じ Wi-Fi に再接続し、Crosync Hub を再起動し、iPhone アプリも再起動して検出をやり直してください。"
        }
      ],
      supportTitle: "さらにサポートが必要ですか？",
      supportBody: "サポート連絡先：",
      supportEmail: "bestshooter2020@163.com"
    }
  },
  legal: {
    privacy: {
      pageTitle: "Privacy Policy",
      intro: "This page contains the English, Chinese, and Japanese versions of the privacy policy.",
      sections: [
        {
          languageLabel: "English",
          title: "Privacy Policy",
          body: [
            "Crosync Drop is designed to help you transfer files from your computer to your iPhone over the same local network with the help of Crosync Hub.",
            "We do not intentionally collect the contents of the files you transfer through the app and desktop companion. File transfers are initiated by you and are intended to occur directly within your local network environment.",
            "The app and website may process limited technical information that is necessary to provide the service, such as device connection state, local network discovery status, app version information, and basic error details used for troubleshooting.",
            "If you contact support, we may receive the information you choose to send us, including your email address and any diagnostic details you include in your message. We use that information only to respond to your request and improve support quality.",
            "Crosync Drop and Crosync Hub may request local network or system permissions that are required for device discovery, connection, and file transfer. These permissions are used only to enable the product's core functionality.",
            "We do not sell your personal information. We do not use this website to run a user account system or a behavioral advertising system.",
            "Because software evolves, we may update this Privacy Policy from time to time. When we make material changes, we may update the policy text on this page along with the effective date.",
            "If you have questions about this Privacy Policy, you can contact us at bestshooter2020@163.com."
          ]
        },
        {
          languageLabel: "中文",
          title: "隐私政策",
          body: [
            "Crosync Drop 旨在帮助你在同一局域网内，借助 Crosync Hub 将电脑文件传输到 iPhone。",
            "我们不会主动收集你通过 App 和桌面端传输的文件内容。文件传输由你主动发起，且设计目标是在你的本地网络环境内直接完成。",
            "为了提供服务，App 和网站可能会处理少量必要的技术信息，例如设备连接状态、局域网发现状态、应用版本信息以及用于排障的基础错误信息。",
            "如果你主动联系支持邮箱，我们可能会收到你自行提供的信息，包括邮箱地址以及你在邮件中附带的诊断描述。我们仅会将这些信息用于回复你的请求和改进支持质量。",
            "Crosync Drop 与 Crosync Hub 可能会申请本地网络或系统相关权限，以实现设备发现、连接和文件传输。这些权限仅用于产品核心功能。",
            "我们不会出售你的个人信息。当前网站也不提供用户账户系统，也不用于行为广告投放。",
            "随着软件持续更新，我们可能会不时调整本隐私政策。若有重要变更，我们会在本页面更新相应内容及生效日期。",
            "如果你对本隐私政策有疑问，请通过 bestshooter2020@163.com 与我们联系。"
          ]
        },
        {
          languageLabel: "日本語",
          title: "プライバシーポリシー",
          body: [
            "Crosync Drop は、同じローカルネットワーク上で Crosync Hub を使い、コンピュータから iPhone へファイルを転送するためのソフトウェアです。",
            "当社は、アプリおよびデスクトップコンパニオンを通じて転送されるファイル内容を意図的に収集しません。ファイル転送はユーザー自身によって開始され、ローカルネットワーク内で直接行われることを前提としています。",
            "サービス提供のために、接続状態、ローカルネットワーク検出状況、アプリのバージョン情報、トラブルシューティングに必要な基本的なエラー情報など、限定的な技術情報を処理する場合があります。",
            "サポートへお問い合わせいただいた場合、メールアドレスやお問い合わせ内容に含まれる診断情報を受け取ることがあります。これらの情報は、お問い合わせへの対応およびサポート品質向上のためにのみ使用します。",
            "Crosync Drop と Crosync Hub は、デバイス検出、接続、ファイル転送のためにローカルネットワークまたはシステム権限を要求する場合があります。これらの権限は製品の中核機能のためにのみ使用されます。",
            "当社は個人情報を販売しません。また、本ウェブサイトではユーザーアカウント機能や行動ターゲティング広告を提供していません。",
            "ソフトウェアの更新に伴い、本プライバシーポリシーを随時変更することがあります。重要な変更がある場合は、本ページ上の内容および適用日を更新します。",
            "本ポリシーについてご不明な点がある場合は、bestshooter2020@163.com までご連絡ください。"
          ]
        }
      ]
    },
    terms: {
      pageTitle: "Terms of Use",
      intro: "This page contains the English, Chinese, and Japanese versions of the terms of use.",
      sections: [
        {
          languageLabel: "English",
          title: "Terms of Use",
          body: [
            "By downloading, installing, or using Crosync Drop, Crosync Hub, or this website, you agree to these Terms of Use.",
            "Crosync Drop and Crosync Hub are provided for personal or internal use to transfer files from a computer to an iPhone over a local network. You are responsible for using the software in compliance with applicable laws and the rights of others.",
            "You are responsible for the files you choose to transfer, store, or manage through the software. You must not use the product to transmit unlawful, infringing, harmful, or unauthorized content.",
            "You may not reverse engineer, redistribute, resell, or misuse the software except where such restriction is prohibited by applicable law.",
            "We may update, improve, suspend, or discontinue parts of the website or software at any time, with or without notice.",
            "The software and website are provided on an 'as is' and 'as available' basis, without warranties of any kind to the fullest extent permitted by law. We do not guarantee uninterrupted availability, error-free operation, or fitness for a particular purpose.",
            "To the fullest extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profit, business opportunity, or device availability arising from the use of the software or website.",
            "These Terms of Use may be updated from time to time. Continued use of the website or software after updates means you accept the revised terms.",
            "If you have questions about these Terms of Use, contact bestshooter2020@163.com."
          ]
        },
        {
          languageLabel: "中文",
          title: "使用条款",
          body: [
            "当你下载、安装或使用 Crosync Drop、Crosync Hub 或本网站时，即表示你同意受本使用条款约束。",
            "Crosync Drop 与 Crosync Hub 旨在用于个人或内部场景下，通过局域网将电脑文件传输到 iPhone。你有责任确保自己的使用方式符合适用法律以及他人的合法权益。",
            "你应自行对通过本软件传输、保存或管理的文件负责。你不得利用本产品传输违法、侵权、有害或未经授权的内容。",
            "除非适用法律明确允许，否则你不得对本软件进行反向工程、再分发、转售或其他不当使用。",
            "我们可在任何时候对网站或软件进行更新、改进、暂停或停止全部或部分功能，并可不另行通知。",
            "在法律允许的最大范围内，本软件和网站按“现状”和“可用”基础提供，不附带任何明示或默示保证。我们不保证服务持续不中断、绝对无错误，亦不保证其适用于任何特定用途。",
            "在法律允许的最大范围内，对于因使用本软件或网站而引起的任何间接、附带、特殊、后果性或惩罚性损害，以及数据、利润、商业机会或设备可用性的损失，我们不承担责任。",
            "我们可能会不时更新本使用条款。若你在条款更新后继续使用网站或软件，视为你接受修订后的条款。",
            "如果你对本使用条款有疑问，请联系 bestshooter2020@163.com。"
          ]
        },
        {
          languageLabel: "日本語",
          title: "利用規約",
          body: [
            "Crosync Drop、Crosync Hub、または本ウェブサイトをダウンロード、インストール、または利用することにより、利用者は本利用規約に同意したものとみなされます。",
            "Crosync Drop と Crosync Hub は、ローカルネットワーク経由でコンピュータから iPhone へファイルを転送するための、個人利用または社内利用向けソフトウェアです。利用者は、適用される法令および第三者の権利を遵守して利用する責任を負います。",
            "利用者は、本ソフトウェアを通じて転送、保存、管理するファイルについて自ら責任を負うものとします。違法、権利侵害、有害、または無断のコンテンツを送信してはなりません。",
            "適用法で明示的に認められる場合を除き、本ソフトウェアのリバースエンジニアリング、再配布、再販売、または不適切な利用を行ってはなりません。",
            "当社は、ウェブサイトまたはソフトウェアの全部または一部を、通知の有無にかかわらず更新、改善、一時停止、または終了することがあります。",
            "法令で認められる最大限の範囲において、本ソフトウェアおよび本ウェブサイトは「現状有姿」かつ「提供可能な範囲」で提供され、明示または黙示を問わずいかなる保証も行いません。継続的な提供、無エラー動作、特定目的への適合性も保証しません。",
            "法令で認められる最大限の範囲において、本ソフトウェアまたは本ウェブサイトの利用に起因する間接損害、付随損害、特別損害、結果損害、懲罰的損害、ならびにデータ、利益、事業機会、またはデバイス可用性の喪失について、当社は責任を負いません。",
            "本利用規約は随時更新される場合があります。更新後も利用を継続した場合、改定後の規約に同意したものとみなされます。",
            "本利用規約についてご不明な点がある場合は、bestshooter2020@163.com までご連絡ください。"
          ]
        }
      ]
    }
  }
};
