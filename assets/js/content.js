export const siteContent = {
  defaultLocale: "en",
  supportedLocales: ["en", "zh", "ja"],
  downloads: {
    windows: "https://github.com/luckcoding78/crosync-drop-website/releases/download/v1.0.0/CrosyncHubSetup.exe",
    mac: "https://github.com/luckcoding78/crosync-drop-website/releases/download/v1.0.0/CrosyncHub.dmg"
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
            "[English Privacy Policy content pending]",
            "Prepare final text covering data collection, local network usage, file transfer scope, support contact, and updates."
          ]
        },
        {
          languageLabel: "中文",
          title: "隐私政策",
          body: [
            "[中文隐私政策内容待补充]",
            "后续需补齐数据收集、本地网络权限、文件传输范围、支持联系方式和更新说明。"
          ]
        },
        {
          languageLabel: "日本語",
          title: "プライバシーポリシー",
          body: [
            "[日本語のプライバシーポリシーは後日追加予定]",
            "データ収集、ローカルネットワーク権限、ファイル転送範囲、サポート連絡先、更新方針を含む正式文面を後で追加します。"
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
            "[English Terms of Use content pending]",
            "Prepare final text covering permitted use, user responsibilities, software distribution, warranty disclaimers, and limitation of liability."
          ]
        },
        {
          languageLabel: "中文",
          title: "使用条款",
          body: [
            "[中文使用条款内容待补充]",
            "后续需补齐许可范围、用户责任、软件分发、免责声明和责任限制等正式内容。"
          ]
        },
        {
          languageLabel: "日本語",
          title: "利用規約",
          body: [
            "[日本語の利用規約は後日追加予定]",
            "利用範囲、利用者責任、ソフトウェア配布、保証免責、責任制限を含む正式文面を後で追加します。"
          ]
        }
      ]
    }
  }
};
