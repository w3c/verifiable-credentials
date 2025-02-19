# Status of a possible PR request

(As of 2025-02-19, 13:00 CET.)

## Implementation results

"Tests pass" means each feature has at least two valid implementations.

* VCDM: all tests pass. 
* VC DI: implementations are done via the specific cryptosuites:
  * EDDSA: all tests pass, including interop tests
  * ECDSA: all tests pass, including interop tests
* JOSE-COSE: ***Have only one full implementation, the second one has to be included in the report***
* JSON Schema: ***No implementations???***
* CID: ***the report is not yet completed*** (but indirect implementation proofs exist: all features are used by VCDI and the cryptosuites). Actually, the DID implementation report can also be referred to.
* Bitstring Status List: ***a number of tests do not pass, the corresponding feature may have to be removed*** (see [§2.1](https://w3c.github.io/vc-bitstring-status-list-test-suite/#Data%20Model:%20BitstringStatusList%20Entry).)

