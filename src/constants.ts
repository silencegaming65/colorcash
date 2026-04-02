import { EarningApp, BlogPost, FAQItem } from './types';

export const APPS: EarningApp[] = [
  {
    id: '91-club',
    name: '91 Club',
    description: 'Highly popular among students. Offers the highest referral commissions and daily rewards. Great for building a network.',
    bonus: '₹200 Instant Bonus',
    referralLink: 'https://www.rajkot91.com/#/register?invitationCode=517864600730',
    isHot: true,
    pros: ['Best referral program', 'Daily login rewards', 'Simple UI'],
    cons: ['Withdrawal limits', 'Occasional server lag'],
    image: 'https://todaysaga.com/wp-content/uploads/2025/04/images.png',
    rating: 4.9,
    commission: 'Up to 45%'
  },
  {
    id: 'bdg-win',
    name: 'BDG Win',
    description: 'New and rising platform with high winning rates and low minimum withdrawal limits. Great for small-scale traders.',
    bonus: '₹100 Welcome Bonus',
    referralLink: 'https://bdgwinfun.cc//#/register?invitationCode=543415847079',
    isHot: true,
    pros: ['Low withdrawal limit', 'High winning rate', 'Easy signup'],
    cons: ['Limited history', 'Small user base'],
    image: 'https://todaysaga.com/wp-content/uploads/2025/04/BDG-Win.jpg',
    rating: 4.8,
    commission: 'Up to 35%'
  },
  {
    id: '82-lottery',
    name: '82 Lottery',
    description: 'A top-rated lottery and color trading app with a massive user base. Offers diverse gaming options and consistent winning opportunities.',
    bonus: '₹300 Signup Bonus',
    referralLink: 'https://www.tkfvhz82.com/#/register?invitationCode=146483613614',
    isHot: true,
    pros: ['Large user community', 'Diverse game selection', 'Consistent payouts'],
    cons: ['Newer platform', 'Support response times vary'],
    image: 'https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/82-Lottery.jpg',
    rating: 4.7,
    commission: 'Up to 40%'
  },
  {
    id: 'tiranga-games',
    name: 'Tiranga Games',
    description: 'Indian-themed platform with a wide variety of games including Wingo and Small/Big. Very reliable for long-term play.',
    bonus: '99% First Deposit',
    referralLink: 'https://tgdream15.com/#/register?invitationCode=3553710719241',
    pros: ['Multiple game modes', 'Secure payment gateway', 'Local support'],
    cons: ['Verification takes time', 'Limited bonus events'],
    image: 'https://th.bing.com/th/id/OIP.NewH_aaTJdqznBZqDHrIiAHaHa?w=312&h=200&c=12&rs=1&o=6&pid=23.1',
    rating: 4.6,
    commission: 'Up to 30%'
  },
  {
    id: 'big-daddy-games',
    name: 'Big Daddy Games',
    description: 'Premium gaming experience with high-stakes tables and exclusive VIP clubs. Perfect for serious traders.',
    bonus: 'VIP Rewards',
    referralLink: 'https://bdglink.cc//#/register?invitationCode=155225204808',
    pros: ['VIP exclusive perks', 'High stakes available', 'Premium interface'],
    cons: ['Not for beginners', 'High withdrawal fees'],
    image: 'https://sc.filehippo.net/images/t_app-icon-l/p/0ccc49af-6b41-4167-b384-ce977c70bf1e/241038175/big-daddy-colour-game-logo',
    rating: 4.8,
    commission: 'Up to 50%'
  },
  {
    id: 'goagames',
    name: 'GoaGames',
    description: 'GoaGames is a popular and trusted color trading platform with a wide range of games and high winning rates. Known for its reliable payouts and user-friendly interface.',
    bonus: '₹150 Welcome Bonus',
    referralLink: 'https://www.goavideo.com/#/register?invitationCode=484524743616',
    pros: ['Wide game variety', 'Reliable payouts', 'User-friendly'],
    cons: ['Newer platform', 'Support can be slow'],
    image: 'https://th.bing.com/th/id/OIP.wewmBZkWUdwxLT-dFQKa4gHaDm?w=261&h=108&c=7&qlt=90&bgcl=2fdd1f&r=0&o=6&pid=13.1',
    rating: 4.7,
    commission: 'Up to 40%'
  },
  {
    id: 'tc-lottery',
    name: 'TC Lottery',
    description: 'Specialized in lottery and color trading. Known for its simple interface and fast payouts. Very consistent performance.',
    bonus: 'Daily Check-in Bonus',
    referralLink: 'https://www.in999ff.com/#/register?invitationCode=246422416975',
    pros: ['Consistent payouts', 'Simple navigation', 'Low data usage'],
    cons: ['Dated design', 'Limited support hours'],
    image: 'https://tse1.mm.bing.net/th/id/OIP.WsC7BIdz-e2ApjEBZg1r5QHaEc?pid=ImgDet&w=192&h=115&c=7&o=7&rm=3',
    rating: 4.4,
    commission: 'Up to 30%'
  },
  {
    id: '55club',
    name: '55club',
    description: 'A premium and highly secure color trading platform with a massive user base and consistent winning patterns. Known for its reliability.',
    bonus: '₹150 Signup Bonus',
    referralLink: 'https://www.ldqodg55.com/#/register?invitationCode=376624600269',
    pros: ['High security', 'Large community', 'Consistent patterns'],
    cons: ['Strict verification', 'Higher minimum withdrawal'],
    image: 'https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/55-Club.jpg',
    rating: 4.7,
    commission: 'Up to 40%'
  },
  {
    id: 'raja-games',
    name: 'Raja Games',
    description: 'A popular and trusted color trading platform with a royal experience. Known for its high winning rates and instant withdrawal features.',
    bonus: '₹200 Signup Bonus',
    referralLink: 'https://www.rajaparty.com/#/register?invitationCode=86271664783',
    pros: ['Royal user experience', 'Instant withdrawals', 'High winning rates'],
    cons: ['Higher minimum deposit', 'Limited game variety'],
    image: 'https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/Raja-Game-App.jpg',
    rating: 4.6,
    commission: 'Up to 45%'
  },
  {
    id: 'bharat-club',
    name: 'Bharat Club',
    description: 'Community-focused earning app with great social features and group winning strategy. Excellent for team play.',
    bonus: 'Referral Rewards',
    referralLink: 'https://bhtclub3.com/#/register?invitationCode=365871781234',
    pros: ['Group play features', 'Social integration', 'Good commissions'],
    cons: ['Requires active team', 'Withdrawal delays'],
    image: 'https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/Bharat-Club.jpg',
    rating: 4.3,
    commission: 'Up to 35%'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 3 Tricks to Earn Faster in Color Apps',
    excerpt: 'Color trading apps can be exciting, but without strategy, your earnings may stay low. Here are the top 3 tricks that help you earn faster while minimizing risk.',
    intro: 'Color trading apps can be exciting, but without strategy, your earnings may stay low. Here are the top 3 tricks that help you earn faster while minimizing risk.',
    tips: [
      {
        title: 'Focus on Referrals',
        content: 'Build a team using your referral links. The more users join through you, the higher your passive income. Share links in groups, social media, or with friends.'
      },
      {
        title: 'Daily Check-ins',
        content: 'Many apps reward users for logging in daily. Never miss a day to collect free bonuses and rewards.'
      },
      {
        title: 'Use Multiple Apps',
        content: 'Don’t rely on a single app. By using multiple verified apps, you can diversify your earnings and reduce the impact of any single app downtime.'
      }
    ],
    date: 'Apr 02, 2026',
    readTime: '5 MIN READ'
  },
  {
    id: '2',
    title: 'How to Avoid Losses in Color Trading',
    excerpt: 'Earning on color trading apps is fun, but losses can happen if you play carelessly. Follow these safe practices to protect your money.',
    intro: 'Earning on color trading apps is fun, but losses can happen if you play carelessly. Follow these safe practices to protect your money.',
    tips: [
      {
        title: 'Set a Budget',
        content: 'Decide in advance how much money you’re willing to invest. Never exceed your budget, even if the app seems promising.'
      },
      {
        title: 'Follow Trends',
        content: 'Check previous results or patterns in the app before placing bets. Making informed decisions increases your chances of winning.'
      },
      {
        title: 'Withdraw Regularly',
        content: 'Don’t leave all your earnings in the app wallet. Withdraw small amounts frequently to secure your profits.'
      }
    ],
    date: 'Apr 02, 2026',
    readTime: '5 MIN READ'
  },
  {
    id: '3',
    title: 'Daily Check-in and Referral Strategies',
    excerpt: 'Consistency is one of the most important factors for earning in mobile trading apps. By following daily routines and smart referral strategies, you can create a steady stream of income.',
    intro: 'Consistency is one of the most important factors for earning in mobile trading apps. By following daily routines and smart referral strategies, you can create a steady stream of income.',
    tips: [
      {
        title: 'Daily Login',
        content: 'Open each app every day to claim bonuses. Even small rewards add up over time.'
      },
      {
        title: 'Share Referrals in Groups',
        content: 'Use WhatsApp, Telegram, or social groups to share your referral links responsibly.'
      },
      {
        title: 'Track Performance',
        content: 'Note which apps give the highest returns and adjust your daily routine accordingly.'
      }
    ],
    date: 'Apr 02, 2026',
    readTime: '5 MIN READ'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is color trading safe?',
    answer: 'Yes! Always use apps listed on this website, as they are verified and trusted. Avoid unknown platforms to protect your money and personal data.'
  },
  {
    question: 'How can I earn real money?',
    answer: 'You can earn by: Claiming signup bonuses using your referral links, participating in daily login rewards, and following tips and strategies in our Blog / How to Earn page.'
  },
  {
    question: 'Can I use multiple apps at once?',
    answer: 'Yes, you can use multiple apps simultaneously to maximize earnings. Just play responsibly and avoid overloading yourself.'
  },
  {
    question: 'Minimum deposit or withdrawal?',
    answer: 'Each app has its own limits. Check the Apps List page for details on minimum deposits and withdrawal policies for every app.'
  },
  {
    question: 'How long do withdrawals take?',
    answer: 'Withdrawals are usually instant or within 24 hours depending on the app. Always follow the app’s instructions for faster processing.'
  }
];
