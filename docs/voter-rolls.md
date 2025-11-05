# Voter Rolls  


## Goals:
1. They are keep Voter Rolls accurate
1. No Ineligible voters can be added: Or it can track who added them. So they can be held accountable
1. Holding accountable any government employee making invalid data
1. Citizen's Personal Info Kept Private: This includes home address, phone number and signature.
1. Citizen Investigate from Home: Open source can download data from blockchain.
1. No voter fraud changing databases in an Undetectable way: This is done by data on the blockchain. Any changes are visible. With the before vs after change data both available (including who and when the change happened).
1. Keep accuracy between states: Prevent duplicates. Handle when citizens move
1. Military and Foreign cases: Handle the harder cases, like US military citizens voting when outside of the USA.
1. Scale up Adoption: The entire country (or entire state) doesn't need to all switch to this at the same time. This can run for a local government. Doesn't require other areas, before it can be used.
1. Can run as secondary: A local government may use their legacy Voter Rolls system as Primary. They can start using this as secondary. This as secondary could enable policing it being accurate. Enable transparency for citizens. Enabling citizen investigators.
   

## Holding accountable any government employee making invalid data:
1. Below shows how we know which Government employee makes a change
1. VotingHolon.com software is open source.
1. Government employees login with their normal SSO (Single Sign-on).  See section below. This software never has passwords.
1. This software knows the name and email of the currently logged in government employee.
1. One bad-actor Government employee can't not act like another government employee. (See below)
1. When a change is made, it stores the government employee's name in the blockchain with the changes made.


## Which Government employee makes a change:
1. Local government does "Single Sign-on" that maps all government employees to a single way to sign on to all "B2G" software. (Internet Hosted or on-prem)
1. Active Directory is the most common used "Identity provider" which stores their login email and password. New government employees have this set when they start work. It is turned OFF here when they leave employment.
1. All B2G software connects to the "Single Sign on" (SSO) Identity provider (Active Directory or competitors) using "SAML 2.0" protocol or a similar equivalent.
1. The B2G connected sofware gets the current logged in user's full name and email. No government employee can act as another government employee. This secures the most secure government computers. (Law Enforcement, Financial, etc.)
1. The following 10 B2G software products are used by most local government in the USA: Tyler Technologies Munis ERP, Microsoft 365, SAP S/4HANA, Oracle Cloud ERP, Zoom Video Communications Zoom, Constellation Software Inc. (Harris) SmartFusion, Workday Government Cloud, CGI Group Inc. Advantage, Google Workspace, Accela Civic Platform
1. The above all work this way with SAML2 to SSO. (Active Directory, etc.)

## Related Topics

* [FHE Encryption Privacy & Security](./fhe)

(VotingHolon.com coming soon)   (Oct 2025)

Please email me ....
