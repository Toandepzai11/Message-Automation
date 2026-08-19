import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | CTIN1.cpp",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Box bg="white" minH="100vh">
      <Container maxW="4xl" py={{ base: 10, md: 16 }}>
        <Stack gap={10}>
          {/* Header */}
          <Box>
            <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={3}>
              Privacy Policy
            </Heading>

            <Text color="gray.500" fontSize="sm">
              Last updated: August 20, 2026
            </Text>
          </Box>

          {/* Introduction */}
          <Stack gap={4}>
            <Text>
              This Privacy Policy explains how CTIN1.cpp collects, uses, and protects information
              when you use our message automation service.
            </Text>

            <Text>
              By using the service, you agree to the practices described in this Privacy Policy. If
              you do not agree with this policy, please stop using the service.
            </Text>
          </Stack>

          {/* Information we collect */}
          <Box>
            <Heading size="lg" mb={4}>
              1. Information We Collect
            </Heading>

            <Stack gap={4}>
              <Text>
                We collect information that is necessary to provide and maintain the message
                automation service.
              </Text>

              <Text>This may include:</Text>

              <Box pl={6}>
                <Stack gap={2}>
                  <Text>• Your name and email address.</Text>
                  <Text>• Account and authentication information.</Text>
                  <Text>• Message templates and automation configurations.</Text>
                  <Text>• Message recipients and scheduling information.</Text>
                  <Text>
                    • Technical information such as browser, device, IP address, and application
                    logs.
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Messages */}
          <Box>
            <Heading size="lg" mb={4}>
              2. Message Data
            </Heading>

            <Stack gap={4}>
              <Text>
                Our service may process message content and recipient information when you configure
                automated messages.
              </Text>

              <Text>
                Message data is processed only as necessary to provide the automation features that
                you configure, such as creating, scheduling, and sending automated messages.
              </Text>

              <Text>We do not sell your private message content.</Text>
            </Stack>
          </Box>

          {/* How we use data */}
          <Box>
            <Heading size="lg" mb={4}>
              3. How We Use Your Information
            </Heading>

            <Stack gap={4}>
              <Text>We may use the information we collect to:</Text>

              <Box pl={6}>
                <Stack gap={2}>
                  <Text>• Provide and operate the service.</Text>
                  <Text>• Create and manage automated messaging workflows.</Text>
                  <Text>• Schedule and process automated messages.</Text>
                  <Text>• Authenticate and secure your account.</Text>
                  <Text>• Provide customer support.</Text>
                  <Text>• Improve the performance and reliability of the service.</Text>
                  <Text>• Detect and prevent abuse or unauthorized activity.</Text>
                  <Text>• Comply with applicable laws and regulations.</Text>
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Sharing */}
          <Box>
            <Heading size="lg" mb={4}>
              4. Information Sharing
            </Heading>

            <Stack gap={4}>
              <Text>
                We do not sell or rent your personal information or private message content.
              </Text>

              <Text>
                We may use trusted third-party services to operate parts of our platform, such as
                hosting, databases, authentication, analytics, or message delivery.
              </Text>

              <Text>
                We may also disclose information when required by law or when necessary to protect
                the security and rights of our users or service.
              </Text>
            </Stack>
          </Box>

          {/* Security */}
          <Box>
            <Heading size="lg" mb={4}>
              5. Security
            </Heading>

            <Stack gap={4}>
              <Text>
                We take reasonable technical and organizational measures to protect your information
                from unauthorized access, alteration, disclosure, or destruction.
              </Text>

              <Text>
                However, no method of electronic storage or transmission is completely secure, and
                we cannot guarantee absolute security.
              </Text>
            </Stack>
          </Box>

          {/* Retention */}
          <Box>
            <Heading size="lg" mb={4}>
              6. Data Retention
            </Heading>

            <Stack gap={4}>
              <Text>
                We retain information for as long as necessary to provide the service, maintain your
                account, perform requested automation, resolve disputes, and comply with legal
                obligations.
              </Text>

              <Text>When information is no longer required, we may delete or anonymize it.</Text>
            </Stack>
          </Box>

          {/* Your rights */}
          <Box>
            <Heading size="lg" mb={4}>
              7. Your Rights
            </Heading>

            <Stack gap={4}>
              <Text>
                Depending on your location and applicable law, you may have rights regarding your
                personal information, including the right to:
              </Text>

              <Box pl={6}>
                <Stack gap={2}>
                  <Text>• Access your personal information.</Text>
                  <Text>• Correct inaccurate information.</Text>
                  <Text>• Request deletion of your information.</Text>
                  <Text>• Request information about how your data is processed.</Text>
                </Stack>
              </Box>

              <Text>To exercise these rights, please contact us using the information below.</Text>
            </Stack>
          </Box>

          {/* Third party services */}
          <Box>
            <Heading size="lg" mb={4}>
              8. Third-Party Services
            </Heading>

            <Stack gap={4}>
              <Text>
                Our service may integrate with third-party platforms or services to provide
                messaging and automation functionality.
              </Text>

              <Text>
                Those services may have their own privacy policies and terms. We recommend reviewing
                the privacy policies of any third-party service that you connect to your account.
              </Text>
            </Stack>
          </Box>

          {/* Changes */}
          <Box>
            <Heading size="lg" mb={4}>
              9. Changes to This Policy
            </Heading>

            <Text>
              We may update this Privacy Policy from time to time. When we make changes, we will
              update the "Last updated" date at the top of this page.
            </Text>
          </Box>

          {/* Contact */}
          <Box>
            <Heading size="lg" mb={4}>
              10. Contact Us
            </Heading>

            <Stack gap={4}>
              <Text>
                If you have any questions about this Privacy Policy or how we handle your
                information, please contact us.
              </Text>

              <Link
                href="mailto:privacy@example.com"
                color="blue.600"
                fontWeight="600"
                width="fit-content"
              >
                privacy@example.com
              </Link>
            </Stack>
          </Box>

          {/* Footer */}
          <Box pt={8} borderTopWidth="1px" borderColor="gray.200">
            <Text fontSize="sm" color="gray.500">
              © 2026 CTIN1.cpp. All rights reserved.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
