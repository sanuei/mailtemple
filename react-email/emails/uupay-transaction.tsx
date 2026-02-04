import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

// 基础 URL
const baseUrl = "https://cdn.jsdelivr.net/gh/sanuei/mailtemple@main/images";

// 社交图标 - 使用 PNG 格式（SVG 在邮件客户端中不被支持）
// X 图标使用 #161616（接近黑色）防止 Gmail 深色模式添加强制白边
const socialIcons = [
    { name: "X", url: "https://x.com/UUPAY_Official", icon: `${baseUrl}/icon-x-with-bg.png`, bg: "#161616", noBg: true },
    { name: "Instagram", url: "https://www.instagram.com/uupay_official", icon: `${baseUrl}/icon-instagram.png`, bg: "#E4405F", noBg: false },
    { name: "Discord", url: "https://discord.gg/uupay", icon: `${baseUrl}/icon-discord.png`, bg: "#5865F2", noBg: false },
    { name: "YouTube", url: "https://www.youtube.com/@UUPAY-Official", icon: `${baseUrl}/icon-youtube.png`, bg: "#FF0000", noBg: false },
    { name: "Facebook", url: "#", icon: `${baseUrl}/icon-facebook.png`, bg: "#1877F2", noBg: false },
    { name: "Telegram", url: "https://t.me/UUPAY_Telegram", icon: `${baseUrl}/icon-telegram.png`, bg: "#26A5E4", noBg: false },
];

// 交易信息接口
interface TransactionEmailProps {
    amount?: string;
    currency?: string;
    transactionTime?: string;
    orderId?: string;
    merchantName?: string;
}

export const UupayTransactionEmail = ({
    amount = "$2,450.00",
    currency = "USD",
    transactionTime = "2024-05-20 14:30:25",
    orderId = "#UP-88392011",
    merchantName = "Global Tech Store",
}: TransactionEmailProps) => {
    const previewText = `UUPAY 交易通知 - ${amount} ${currency}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header - 使用 table 实现稳定居中 */}
                    <Section style={headerSection}>
                        <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
                            <tr>
                                <td style={{ paddingRight: "12px", verticalAlign: "middle" }}>
                                    <Img
                                        src={`${baseUrl}/uupay-logo.jpg`}
                                        width="48"
                                        height="48"
                                        alt="UUPAY"
                                        style={{ borderRadius: "10px", display: "block" }}
                                    />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Text style={logoText}>UUPAY</Text>
                                </td>
                            </tr>
                        </table>
                        <Text style={tagline}>Next-Gen Payment Solution</Text>
                    </Section>

                    <Hr style={divider} />

                    {/* Main Content */}
                    <Section style={contentSection}>
                        <Text style={greeting}>尊敬的 UUPAY 用戶，</Text>
                        <Text style={bodyText}>您的賬戶在近日有一筆新的交易通知：</Text>

                        {/* Transaction Box */}
                        <Section style={transactionBox}>
                            <Text style={transactionLabel}>交易金額</Text>
                            <Text style={transactionAmount}>
                                {amount} {currency}
                            </Text>

                            <Hr style={dashedDivider} />

                            <table cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "12px" }}>
                                <tr>
                                    <td><Text style={transactionLabel}>交易時間</Text></td>
                                    <td style={{ textAlign: "right" as const }}><Text style={transactionValue}>{transactionTime}</Text></td>
                                </tr>
                                <tr>
                                    <td><Text style={transactionLabel}>訂單編號</Text></td>
                                    <td style={{ textAlign: "right" as const }}><Text style={transactionValue}>{orderId}</Text></td>
                                </tr>
                                <tr>
                                    <td><Text style={transactionLabel}>商戶名稱</Text></td>
                                    <td style={{ textAlign: "right" as const }}><Text style={transactionValue}>{merchantName}</Text></td>
                                </tr>
                            </table>
                        </Section>

                        <Text style={bodyText}>
                            如這不是您本人的操作，請立即聯繫我們的客服中心或凍結您的賬戶。
                        </Text>

                        <Text style={signature}>UUPAY 團隊</Text>
                    </Section>

                    <Hr style={divider} />

                    {/* Footer */}
                    <Section style={footerSection}>
                        {/* Footer Logo - 使用 table 实现稳定居中 */}
                        <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto 16px auto" }}>
                            <tr>
                                <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                                    <Img
                                        src={`${baseUrl}/uupay-logo.jpg`}
                                        width="36"
                                        height="36"
                                        alt="UUPAY"
                                        style={{ borderRadius: "8px", display: "block" }}
                                    />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Text style={footerLogoText}>UUPAY</Text>
                                </td>
                            </tr>
                        </table>

                        <Text style={footerTagline}>
                            Empowering every transaction with freedom
                        </Text>

                        {/* Social Icons - 使用 table 实现水平排列 (无背景圆圈) */}
                        <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto 24px auto" }}>
                            <tr>
                                {socialIcons.map((social, index) => (
                                    <td key={index} style={{ padding: "0 12px" }}>
                                        <Link href={social.url} style={{ textDecoration: "none" }}>
                                            <Img
                                                src={social.icon}
                                                width="36"
                                                height="36"
                                                alt={social.name}
                                                style={{ display: "block", width: "36px", height: "36px" }}
                                            />
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </table>

                        <Text style={footerText}>
                            Making payments simple, connecting you to the world
                        </Text>

                        {/* App Store Buttons */}
                        <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto 24px auto" }}>
                            <tr>
                                <td style={{ paddingRight: "8px" }}>
                                    <Link href="#">
                                        <Img
                                            src={`${baseUrl}/btn-appstore-v2.png`}
                                            height="40"
                                            alt="Download on the App Store"
                                            style={{ borderRadius: "8px", display: "block" }}
                                        />
                                    </Link>
                                </td>
                                <td style={{ paddingLeft: "8px" }}>
                                    <Link href="#">
                                        <Img
                                            src={`${baseUrl}/btn-googleplay-v2.png`}
                                            height="40"
                                            alt="GET IT ON Google Play"
                                            style={{ borderRadius: "8px", display: "block" }}
                                        />
                                    </Link>
                                </td>
                            </tr>
                        </table>

                        <Hr style={footerDivider} />

                        <Text style={copyright}>
                            Copyright © 2024 - 2026 UUPAY. All rights reserved.
                        </Text>
                        <Text style={disclaimer}>此郵件由系統自動發送，請勿直接回覆。</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default UupayTransactionEmail;

// ========== STYLES ==========

const main: React.CSSProperties = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container: React.CSSProperties = {
    margin: "0 auto",
    padding: "40px 20px",
    maxWidth: "600px",
};

const headerSection: React.CSSProperties = {
    textAlign: "center" as const,
    padding: "20px 0",
};

const logoText: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0",
    letterSpacing: "1px",
};

const tagline: React.CSSProperties = {
    fontSize: "14px",
    color: "#4b5563",
    fontWeight: "500",
    margin: "12px 0 0 0",
    letterSpacing: "0.5px",
    textAlign: "center" as const,
};

const divider: React.CSSProperties = {
    borderTop: "2px solid #f3f4f6",
    margin: "0",
};

const contentSection: React.CSSProperties = {
    padding: "32px 0",
};

const greeting: React.CSSProperties = {
    fontSize: "16px",
    color: "#1f2937",
    lineHeight: "1.6",
    margin: "0 0 24px 0",
};

const bodyText: React.CSSProperties = {
    fontSize: "16px",
    color: "#374151",
    lineHeight: "1.8",
    margin: "0 0 16px 0",
};

const transactionBox: React.CSSProperties = {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "24px",
};

const transactionLabel: React.CSSProperties = {
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: "500",
    margin: "0 0 4px 0",
};

const transactionAmount: React.CSSProperties = {
    fontSize: "24px",
    color: "#111827",
    fontWeight: "700",
    margin: "0 0 16px 0",
};

const dashedDivider: React.CSSProperties = {
    borderTop: "1px dashed #e5e7eb",
    margin: "12px 0",
};

const transactionValue: React.CSSProperties = {
    fontSize: "13px",
    color: "#374151",
    margin: "0",
};

const signature: React.CSSProperties = {
    fontSize: "16px",
    color: "#1f2937",
    fontWeight: "500",
    margin: "36px 0 0 0",
};

const footerSection: React.CSSProperties = {
    textAlign: "center" as const,
    padding: "32px 0",
};

const footerLogoText: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0",
};

const footerTagline: React.CSSProperties = {
    fontSize: "14px",
    color: "#6b7280",
    fontStyle: "italic",
    margin: "0 0 20px 0",
    textAlign: "center" as const,
};

const footerText: React.CSSProperties = {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 20px 0",
    textAlign: "center" as const,
};

const footerDivider: React.CSSProperties = {
    borderTop: "1px solid #e5e7eb",
    margin: "24px 0",
};

const copyright: React.CSSProperties = {
    fontSize: "12px",
    color: "#9ca3af",
    margin: "0 0 4px 0",
    textAlign: "center" as const,
};

const disclaimer: React.CSSProperties = {
    fontSize: "11px",
    color: "#9ca3af",
    margin: "0",
    textAlign: "center" as const,
};
